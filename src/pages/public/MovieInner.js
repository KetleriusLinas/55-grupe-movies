import { getPublicMovieByUrl } from "../../db/public/getAllMovieByUrl.js";
import { PageTemplate } from "../../templates/PageTemplate.js";
import { pageTitle } from "../../ui/pageTitle.js";

export class PageMovieInner extends PageTemplate {
    constructor(req) {
        super(req);
    }
    async main() {

        const url = this.req.params.movie;
        const movie = await getPublicMovieByUrl(url);

        if (movie) {
            return `
                    <main>
                        ${pageTitle(movie.title)}
                    </main>`;
        }

        return `
                    <main>
                        ${pageTitle(`Movie "${url}" not found`)}
                    </main>`;
    }
}