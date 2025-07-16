import { moviesData } from "../../../data/moviesData.js";
import { getCategoryByUrlSlug } from "../../../db/admin/getCategoryByUrlSlug.js";
import { formatDuration } from "../../../lib/formatDuration.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminMoviesView extends AdminTemplate {
    async main() {
        // const data = await getCategoryByUrlSlug(this.req.params.urlSlug);
        // const category = data[0];

        const movie = moviesData[0];

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
                                            <img style="max-height: 5rem;" src="${movie.img}" alt="Movie thumbnail">
                                            <p>${movie.img}</p>
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
                                        <td>${formatDuration(movie.durationInMinutes)}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Category</td>
                                        <td>${movie.category}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Release date</td>
                                        <td>${movie.releaseDate}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Rating</td>
                                        <td>${movie.rating} ⭐</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Status</td>
                                        <td>${movie.status === 'published'
                ? '<span class="badge text-bg-success">Published</span>'
                : '<span class="badge text-bg-warning">Draft</span>'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}