import { connection } from "../../../db.js";
import { IsValid } from "../../../lib/IsValid.js";

export async function putMovies(req, res) {
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
        duration: 'numberInteger',
        category: 'numberInteger',
        status: 'nonEmptyString',
        img: 'nonEmptyString',
    }, {
        description: 'nonEmptyString',
        releaseDate: 'nonEmptyString',
        rating: 'numberFloat',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { original_url } = req.params;
    const { title, url, status, duration, img } = req.body;
    let { category, description, releaseDate, rating } = req.body;
    const imgPath = img.split('/').at(-1);

    if (category === 0) {
        category = null;
    }
    if (!description) {
        description = '';
    }
    if (!releaseDate) {
        releaseDate = null;
    }
    if (!rating) {
        rating = 0;
    }

    try {
        const sql = `
            UPDATE movies
            SET img = ?, title = ?, url_slug = ?, category_id = ?, status_id = (
                SELECT id FROM general_status WHERE name = ?
            ),  description = ?, release_date = ?, duration_in_minutes = ?, rating = ?
            WHERE url_slug = ?`;
        const [response] = await connection.execute(sql,
            [imgPath, title, url, category, status, description, releaseDate, duration, rating * 10, original_url]);

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
        msg: 'Sekmingai atnaujintas filmas',
    });
}