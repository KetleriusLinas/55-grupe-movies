import { getPublicCategoryByUrl } from "../../db/public/getCategoryByUrl.js";
import { getPublicMoviesByCategoryUrl } from "../../db/public/getMoviesByCategoryUrl.js";
import { PageTemplate } from "../../templates/PageTemplate.js";
import { moviesListSection } from "../../ui/moviesList.js";
import { pageTitle } from "../../ui/pageTitle.js";

export class PageCategoryInner extends PageTemplate {
    constructor(req) {
        super(req);
    }

    async main() {
        const url = this.req.params.category;
        const category = await getPublicCategoryByUrl(url);

        if (!category) {
            return `
                <main>
                    ${pageTitle('"' + url + '" not found')}
                </main>`;
        }

        const data = await getPublicMoviesByCategoryUrl(url);

        if (data.length) {
            return `
                <main>
                    ${pageTitle(category.title)}
                    ${moviesListSection(data)}
                </main>`;
        }

        return `
            <main>
                ${pageTitle(category.title)}
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <p>Category is empty, come back later.</p>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}