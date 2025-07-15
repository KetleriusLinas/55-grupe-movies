import { connection } from "../../db.js";

export async function getCategoryByUrlSlug(urlSlug) {
    try {
        const sql = `
            SELECT
                categories.*,
                0 AS moviesCount,
                category_status.name AS statusName
            FROM categories
            INNER JOIN category_status
                ON categories.status_id = category_status.id
            WHERE categories.url_slug = ?;`;
        const [result] = await connection.execute(sql, [urlSlug]);
        return result;
    } catch (err) {
        return [];
    }
}