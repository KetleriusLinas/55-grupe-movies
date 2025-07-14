import { connection } from "../db.js";

export async function getAllCategories() {
    try {
        const sql = `SELECT * FROM categories;`;
        const [result] = await connection.execute(sql)
        return result;
    } catch (err) {
        return [];
        }
    }