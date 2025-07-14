import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function postCategories(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        title: 'nonEmptyString',
        url: 'nonEmptyString',
        status: 'nonEmptyString',
    },
        {
            description: 'nonEmptyString',
        });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { title, url, status, description } = req.body;

    try {
        const sql = `SELECT * FROM categories WHERE title = ? OR url_slug = ?;`;
        const [response] = await connection.execute(sql, [title, url]);

        if (response.length > 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Tokia kategorija jau egzistuoja',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    try {
        const sql = `INSERT INTO categories (title, url_slug, status_id, description) VALUES (?, ?, 
        (SELECT id FROM category_status WHERE name = ?), 
        ?);`;
        const [response] = await connection.execute(sql, [title, url, status, description]);

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

    return res.status(201).json({
        status: 'success',
        msg: 'Sekmingai sukurta filmu kategorija',
    });
}