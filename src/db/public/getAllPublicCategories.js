import { connection } from "../../db.js";

export async function getAllPublicCategories() {
    try {
        const sql = `
            SELECT
                categories.*,
                0 AS moviesCount
            FROM categories
            INNER JOIN category_status
                ON categories.status_id = category_status.id
            WHERE category_status.name = "published";`;
        const [result] = await connection.execute(sql);
        return result;
    } catch (err) {
        return [];
    }
}