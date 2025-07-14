import { connection } from "../db.js";

export async function getDraftCategories() {
    try {
        const sql = `SELECT *, 0 AS moviesCount, categories.status.name  
        FROM categories
        INNER JOIN category_status
            ON categories.status_id = category_status.id
        WHERE categories.status.name = "?";`;
        const [result] = await connection.execute(sql, ['draft'])
        return result;
    } catch (err) {
        return [];
    }
}