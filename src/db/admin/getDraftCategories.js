import { connection } from "../../db.js";

export async function getDraftCategories() {
    try {
        const sql = `
            SELECT
                categories.*,
                0 AS moviesCount,
                category_status.name AS statusName
            FROM categories
            INNER JOIN category_status
                ON categories.status_id = category_status.id
            WHERE category_status.name = ?;`;
        const [result] = await connection.execute(sql, ['draft']);
        return result;
    } catch (err) {
        return [];
    }
}