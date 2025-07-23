import { connection } from "../../../db.js";
import { IsValid } from "../../../lib/IsValid.js";

export async function postMovies(req, res) {
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
        const sql = `SELECT * FROM movies WHERE url_slug = ?;`;
        const [response] = await connection.execute(sql, [url]);

        if (response.length > 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Tokia filmo nuoroda jau uzimta',
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
        const sql = `
            INSERT INTO movies
                (img, title, url_slug, category_id, status_id, description, release_date, duration_in_minutes, rating)
            VALUES (?, ?, ?, ?,
                (SELECT id FROM general_status WHERE name = ?),
                ?, ?, ?, ?);`;
        const [response] = await connection.execute(sql,
            [imgPath, title, url, category, status, description, releaseDate, duration, rating * 10]
        );

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
        msg: 'Sekmingai sukurtas filmas',
    });
}