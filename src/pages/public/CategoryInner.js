import { getAllPublicMovies } from "../../db/public/getAllMovies.js";
import { getPublicCategoryByUrl } from "../../db/public/getCategoryByUrl.js";
import { PageTemplate } from "../../templates/PageTemplate.js";
import { moviesListSection } from "../../ui/moviesList.js";
import { pageTitle } from "../../ui/pageTitle.js";

export class PageCategoryInner extends PageTemplate {
    constructor(req) {
        super(req);
    }
    async main() {
        const category = await getPublicCategoryByUrl(this.req.params.category);

        if (!category) {
            return `
                <main>
                    ${pageTitle('"' + this.req.params.category + '" not found')} 
                </main>`;
        }

        const data = await getAllPublicMovies();


        return `
            <main>
                ${pageTitle(category.title)}
                ${moviesListSection(data)}
            </main>`;
    }
}

// ??????????????????????