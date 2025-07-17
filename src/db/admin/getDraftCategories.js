import { connection } from "../../db.js";

export async function getDraftCategories() {
    try {
        const sql = `
            SELECT
                categories.*,
                0 AS moviesCount,
                general_status.name AS statusName
            FROM categories
            INNER JOIN general_status
                ON categories.status_id = general_status.id
            WHERE general_status.name = ?;`;
        const [result] = await connection.execute(sql, ['draft']);
        return result;
    } catch (err) {
        return [];
    }
}