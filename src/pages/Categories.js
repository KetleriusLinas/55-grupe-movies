import { placeholder } from "../ui/placeholder.js";
import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";

export class PageCategories extends PageTemplate {
    main() {
        return `
            <main> 
                ${pageTitle('Catergory')}
                ${placeholder('Catergory list', [
            'pavadinimas',
            'trumpas aprasas',
            'filmu kiekis toje kategorijoje',
            'nuoroda i vidini puslapi',
            'pavadinimas',
        ])}
            </main>`;
    }
}