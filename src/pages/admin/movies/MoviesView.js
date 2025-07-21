import { getMovieByUrlSlug } from "../../../db/admin/getMovieByUrlSlug.js";
import { formatDate } from "../../../lib/formatDate.js";
import { formatDuration } from "../../../lib/formatDuration.js";
import { formatRating } from "../../../lib/formatRating.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminMoviesView extends AdminTemplate {
    async main() {
        const data = await getMovieByUrlSlug(this.req.params.urlSlug);
        const movie = data[0];

        if (!movie) {
            return `
                <main>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h1 class="display-5">Movie not found</h1>
                            </div>
                        </div>
                    </div>
                </main>`;
        }

        const img = movie.img ? ('/img/movies/' + movie.img) : '/img/default.png';

        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-5">"${movie.title}" movie details</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-9 col-lg-6">
                            <table class="table table-bordered border-primary">
                                <tbody>
                                    <tr class="mb-3">
                                        <td>Thumbnail</td>
                                        <td>
                                            <img style="max-height: 5rem;" src="${img}" alt="Movie thumbnail">
                                            <p>${img}</p>
                                        </td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Title</td>
                                        <td>${movie.title}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Url slug</td>
                                        <td>${movie.url_slug}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Description</td>
                                        <td>${movie.description}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Duration</td>
                                        <td>${formatDuration(movie.duration_in_minutes)}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Category</td>
                                        <td>${movie.categoryName}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Release date</td>
                                        <td>${formatDate(movie.release_date)}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Rating</td>
                                        <td>${formatRating(movie.rating)}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Status</td>
                                        <td>${movie.status === 'published'
                ? '<span class="badge text-bg-success">Published</span>'
                : '<span class="badge text-bg-warning">Draft</span>'
            }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}