import { connection } from "../../db.js";

export async function getAllPublicCategories() {
    try {
        const sql = `
            SELECT
                categories.*,
                0 AS moviesCount
            FROM categories
            INNER JOIN general_status
                ON categories.status_id = general_status.id
            WHERE general_status.name = "published";`;
        const [result] = await connection.execute(sql);
        return result;
    } catch (err) {
        return [];
    }
}