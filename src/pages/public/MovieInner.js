import { getPublicMovieByUrl } from "../../db/public/getAllMovieByUrl.js";
import { formatDate } from "../../lib/formatDate.js";
import { formatDuration } from "../../lib/formatDuration.js";
import { formatRating } from "../../lib/formatRating.js";
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

            const img = movie.img ? ('movies/' + movie.img) : 'default.jpg';

            return `
                <main>
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-6 mb-5">
                                <strong class="d-inline-block mb-2 text-primary-emphasis">${movie.category}</strong>
                                <h1 class="display-2">${movie.title}</h1>
                                <p class="card-text mb-5">${movie.description}</p>
                                <div class="mb-1 text-body-secondary">Released: ${formatDate(movie.release_date)}</div>
                                <div class="mb-1 text-body-secondary">Duration: ${formatDuration(movie.duration_in_minutes)}</div>
                                <div class="mb-1 text-body-secondary">Rating: ${formatRating(movie.rating)}</div>
                            </div>
                            <img src="/img/${img}" alt="Movie thumbnail" class="col-12 col-lg-4 object-fit-contain">
                        </div>
                    </div>
                </main>`;
        }

        return `
                    <main>
                        ${pageTitle(`Movie "${url}" not found`)}
                    </main>`;
    }
}