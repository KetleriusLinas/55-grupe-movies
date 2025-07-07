import { connection } from "../../db.js";
import { hash } from "../../lib/hash.js";
import { IsValid } from "../../lib/IsValid.js";
import { randomString } from "../../lib/randomString.js";

export async function postLogin(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        usernameOrEmail: 'nonEmptyString',
        password: 'password',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { usernameOrEmail, password } = req.body;
    let userObj = null;

    try {
        const sql = `SELECT * FROM users WHERE username = ? OR email = ?;`;
        const [response] = await connection.execute(sql, [usernameOrEmail, usernameOrEmail]);

        if (response.length === 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Username/email ir password pora yra neteisinga',
            });
        }

        if (response.length > 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }

        userObj = response[0];
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    const hashedPassword = hash(password + userObj.salt);

    if (hashedPassword !== userObj.password_hash) {
        return res.status(400).json({
            status: 'error',
            msg: 'Username/email ir password pora yra neteisinga',
        });
    }

    const loginTokenString = randomString();

    try {
        const sql = `INSERT INTO login_tokens (user_id, token) VALUES (?, ?);`;
        const [response] = await connection.execute(sql, [userObj.id, loginTokenString]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    const cookieParams = [
        `loginToken=${loginTokenString}`,
        'domain=localhost',
        'max-age=3600',
        'HttpOnly',
        'path=/',
        'Secure',
        'SameSite=Lax',
    ];

    return res
        .set({ 'Set-Cookie': cookieParams.join('; ') })
        .json({
            status: 'success',
            msg: 'Tu buvai sekmingai prijungtas prie sistemos',
        });
}