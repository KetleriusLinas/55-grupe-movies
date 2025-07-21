import { connection } from "../../db.js";

export async function getPublicCategoryByUrl() {
    try {
        const sql = `
            SELECT
                categories.title
            FROM categories
            INNER JOIN general_status
                ON categories.status_id = general_status.id
            WHERE general_status.name = "published"
                AND categories.url_slug = ?;`;
        const [result] = await connection.execute(sql);

        return result.length ? result[0] : null;

    } catch (err) {
        return null;
    }
}