import { getAllPublicCategories } from "../../db/public/getAllPublicCategories.js";
import { PageTemplate } from "../../templates/PageTemplate.js";
import { categoriesListSection } from "../../ui/categoriesList.js";
import { pageTitle } from "../../ui/pageTitle.js";

export class PageCategories extends PageTemplate {
    constructor(req) {
        super(req);
    }
    async main() {
        const data = await getAllPublicCategories();

        return `
            <main>
                ${pageTitle('Categories')}
                ${categoriesListSection(data)}
            </main>`;
    }
}