import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function putCategories(req, res) {
    const [errParams, msgParams] = IsValid.fields(req.params, {
        original_url: 'nonEmptyString',
    });

    if (errParams) {
        return res.json({
            status: 'error',
            msg: msgParams,
        });
    }

    const [err, msg] = IsValid.fields(req.body, {
        title: 'nonEmptyString',
        url: 'nonEmptyString',
        status: 'nonEmptyString',
    }, {
        description: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { original_url } = req.params;
    const { title, url, status, description } = req.body;

    try {
        const sql = `
            UPDATE categories
            SET title = ?, url_slug = ?, description = ?, status_id = (
                SELECT id FROM category_status WHERE name = ?
            )
            WHERE url_slug = ?`;
        const [response] = await connection.execute(sql, [title, url, description, status, original_url]);

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

    return res.status(200).json({
        status: 'success',
        msg: 'Sekmingai atnaujinta filmu kategorija',
    });
}