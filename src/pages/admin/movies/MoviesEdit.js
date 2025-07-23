import { getAllCategories } from "../../../db/admin/getAllCategories.js";
import { getMovieByUrlSlug } from "../../../db/admin/getMovieByUrlSlug.js";
import { formatDate } from "../../../lib/formatDate.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminMoviesEdit extends AdminTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'edit-movie';
    }

    async main() {
        const moviesData = await getMovieByUrlSlug(this.req.params.urlSlug);
        const movie = moviesData[0];

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

        const categories = await getAllCategories();
        let categoriesHTML = '';

        for (const cat of categories) {
            categoriesHTML += `<option value="${cat.id}" ${movie.category_id === cat.id ? 'selected' : ''}>${cat.title}</option>`;
        }

        const minutes = movie.duration_in_minutes % 60;
        const hours = (movie.duration_in_minutes - minutes) / 60;

        const imgPath = movie.img === 'default.jpg' ? '/img/default.jpg' : '/img/movies/' + movie.img;

        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-5">Edit movie</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <form class="col-12 col-md-9 col-lg-6 mb-5">
                            <img id="img_preview" class="w-100 object-fit-contain" src="${imgPath}" alt="Movie thumbnail">
                            <p id="img_path">${imgPath}</p>
                            <input type="file" class="form-control" id="img" name="img">
                        </form>

                        <form class="col-12 col-md-9 col-lg-6">
                            <input value="${movie.url_slug}" type="text" id="original_url" hidden>
                            <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input value="${movie.title}" type="text" class="form-control" id="title" required>
                            </div>
                            <div class="mb-3">
                                <label for="url" class="form-label">Url slug</label>
                                <input value="${movie.url_slug}" type="text" class="form-control" id="url" required>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control" id="description">${movie.description}</textarea>
                            </div>
                            <div class="row">
                                <p>Duration</p>
                                <div class="mb-3 col-12 col-md-6">
                                    <label for="duration_hours" class="form-label">Hours</label>
                                    <input value="${hours}" min="0" max="4" step="1" type="number" class="form-control" id="duration_hours">
                                </div>
                                <div class="mb-3 col-12 col-md-6">
                                    <label for="duration_minutes" class="form-label">minutes</label>
                                    <input value="${minutes}" min="0" max="59" step="1" type="number" class="form-control" id="duration_minutes">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="category" class="form-label">Category</label>
                                <select class="form-select" id="category">
                                    <option value="0" ${movie.category_id === null ? 'selected' : ''}>-- choose</option>
                                    ${categoriesHTML}
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="release_date" class="form-label">Release date</label>
                                <input value="${formatDate(movie.release_date)}" type="date" class="form-control" id="release_date">
                            </div>
                            <div class="mb-3">
                                <label for="rating" class="form-label">Rating</label>
                                <input value="${movie.rating / 10}" type="number" min="1" max="5" step="0.1" class="form-control" id="rating">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <div class="form-check">
                                    <input ${movie.statusName === 'published' ? 'checked' : ''} type="radio" name="radios" class="form-check-input" id="status_published">
                                    <label class="form-check-label" for="status_published">Published</label>
                                </div>
                                <div class="form-check">
                                    <input ${movie.statusName === 'draft' ? 'checked' : ''} type="radio" name="radios" class="form-check-input" id="status_draft">
                                    <label class="form-check-label" for="status_draft">Draft</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                            <button type="reset" class="btn btn-secondary float-end">Reset</button>
                        </form>
                    </div>
                </div>
            </main>`;
    }
}