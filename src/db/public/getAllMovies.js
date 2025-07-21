import { connection } from "../../db.js";

export async function getAllPublicMovies() {
    try {
        const sql = `
            SELECT movies.*,
                categories.title AS category
            FROM movies
            INNER JOIN general_status
                ON movies.status_id = general_status.id
            INNER JOIN categories
                ON category_id = categories.id
            WHERE general_status.name = "published";`;
        const [result] = await connection.execute(sql);
        return result;
    } catch (err) {
        return [];
    }
}