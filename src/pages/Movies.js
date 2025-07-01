import { placeholder } from "../../ui/placeholder.js";
import { PageTemplate } from "../templates/PageTemplate.js";

export class PageMovies extends PageTemplate {
    main() {
        return `
            <main> 
                ${placeholder('Page title')}
                ${placeholder('Filter', [
                    'filtravimas pagal:',
                    'pagal tekstine paieska is pavadinimo ir apraso',
                    'pagal trukme',
                    'pagal kategorija',
                    'ivertinimas',
                ])}
                ${placeholder('Movie list', [
                    'korteliu sarasas:',
                    'nuotrauka',
                    'filmo pavadinimias',
                    'trumpas aprasas',
                    'trukme',
                    'ivertinimas (zvaigzdutes)',
                    'nuoroda i vidini puslapi',
                    'filmo kategorija',
                ])}
            </main>
        `;
    }
}