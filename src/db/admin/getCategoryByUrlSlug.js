import { connection } from "../../db.js";

export async function getCategoryByUrlSlug(urlSlug) {
    try {
        const sql = `
            SELECT
                categories.*,
                0 AS moviesCount,
                general_status.name AS statusName
            FROM categories
            INNER JOIN general_status
                ON categories.status_id = general_status.id
            WHERE categories.url_slug = ?;`;
        const [result] = await connection.execute(sql, [urlSlug]);
        return result;
    } catch (err) {
        return [];
    }
}