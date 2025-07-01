import { placeholder } from "../ui/placeholder.js";
import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";

export class PageMovies extends PageTemplate {
    main() {
        return `
            <main> 
                ${pageTitle('Movies')}
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