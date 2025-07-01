import { placeholder } from "../../ui/placeholder.js";
import { PageTemplate } from "../templates/PageTemplate.js";

export class PageCategories extends PageTemplate{
    main() {
        return `
            <main> 
                ${placeholder ('Page title')}
                ${placeholder ('Catergory list' [
                    'pavadinimas',
                    'trumpas aprasas',
                    'filmu kiekis toje kategorijoje',
                    'nuoroda i vidini puslapi',
                    'pavadinimas',

                ])}
                ${placeholder ('Page title')}
            </main>
        `;
    }
}