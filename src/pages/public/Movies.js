import { getAllPublicMovies } from "../../db/public/getAllMovies.js";
import { PageTemplate } from "../../templates/PageTemplate.js";
import { moviesFilterForm } from "../../ui/forms/moviesFilterForm.js";
import { moviesListSection } from "../../ui/moviesList.js";
import { pageTitle } from "../../ui/pageTitle.js";

export class PageMovies extends PageTemplate {
    constructor(req) {
        super(req);
    }
    async main() {

        const data = await getAllPublicMovies();


        return `
            <main>
                ${pageTitle('Movies')}
                ${await moviesFilterForm(this.req.query)}
                ${moviesListSection(data)}
            </main>`;
    }
}