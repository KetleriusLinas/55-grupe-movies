import { categoriesData } from "../data/categoriesData.js";
import { PageTemplate } from "../templates/PageTemplate.js";
import { categoriesListSection } from "../ui/categoriesList.js";
import { pageTitle } from "../ui/pageTitle.js";

export class PageCategories extends PageTemplate {
    main() {
        return `
            <main>
                ${pageTitle('Categories')}
                ${categoriesListSection(categoriesData)}
            </main>`;
    }
}