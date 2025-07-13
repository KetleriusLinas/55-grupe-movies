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

    // SELECT
    // INSERT

    return res.status(201).json({
        status: 'success',
        msg: 'Sekmingai sukurta filmu kategorija',
    });
}