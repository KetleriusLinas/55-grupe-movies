import { connection } from "../db.js";

export async function getAllCategories() {
    try {
        const sql = `SELECT categories.*, 0 AS moviesCount, categories.status.name
        FROM categories        
        INNER JOIN category_status
            ON categories.status_id = category_status.id;`;
        const [result] = await connection.execute(sql)
        return result;
    } catch (err) {
        return [];
        }
    }