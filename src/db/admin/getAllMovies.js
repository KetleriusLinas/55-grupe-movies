import { connection } from "../../db.js";

export async function getAllMovies() {
    try {
        const sql = `
            SELECT
                movies*,
                general_status.name AS statusName
            FROM movies
            INNER JOIN general_status
                ON movies.status_id = general_status.id;`;
        const [result] = await connection.execute(sql);
        return result;
    } catch (err) {
        return [];
    }
}