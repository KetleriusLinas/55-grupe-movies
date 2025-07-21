import { connection } from "../../db.js";

export async function getPublicMoviesByCategoryUrl(categoryUrl) {
    try {
        const sql = `
            SELECT movies.*,
                categories.title AS category
            FROM movies
            INNER JOIN general_status
                ON movies.status_id = general_status.id
            INNER JOIN categories
                ON category_id = categories.id
            WHERE general_status.name = "published"
                AND categories.url_slug = ?;`;
        const [result] = await connection.execute(sql, [categoryUrl]);
        return result;
    } catch (err) {
        return [];
    }
}