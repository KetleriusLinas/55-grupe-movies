import { getAllCategories } from "../../../db/admin/getAllCategories.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminMoviesNew extends AdminTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'new-movie';
    }

    async main() {
        const categories = await getAllCategories();
        let categoriesHTML = '';

        for (const cat of categories) {
            categoriesHTML += `<option value="${cat.id}">${cat.title}</option>`;
        }

        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-5">New movie</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <form class="col-12 col-md-9 col-lg-6 mb-5">
                            <img id="img_preview" class="w-100 object-fit-contain" src="/img/default.png" alt="Movie thumbnail">
                            <p id="img_path">/img/default.png</p>
                            <input type="file" class="form-control" id="img" name="img">
                        </form>
                        
                        <form class="col-12 col-md-9 col-lg-6">
                            <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input type="text" class="form-control" id="title" required>
                            </div>
                            <div class="mb-3">
                                <label for="url" class="form-label">Url slug</label>
                                <input type="text" class="form-control" id="url" required>
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control" id="description"></textarea>
                            </div>
                            <div class="row">
                                <p>Duration</p>
                                <div class="mb-3 col-12 col-md-6">
                                    <label for="duration_hours" class="form-label">Hours</label>
                                    <input value="0" min="0" max="4" step="1" type="number" class="form-control" id="duration_hours">
                                </div>
                                <div class="mb-3 col-12 col-md-6">
                                    <label for="duration_minutes" class="form-label">minutes</label>
                                    <input value="0" min="0" max="59" step="1" type="number" class="form-control" id="duration_minutes">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="category" class="form-label">Category</label>
                                <select class="form-select" id="category">
                                    <option value="0">-- choose</option>
                                    ${categoriesHTML}
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="release_date" class="form-label">Release date</label>
                                <input type="date" class="form-control" id="release_date">
                            </div>
                            <div class="mb-3">
                                <label for="rating" class="form-label">Rating</label>
                                <input type="number" min="1" max="5" step="0.1" class="form-control" id="rating">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Status</label>
                                <div class="form-check">
                                    <input type="radio" name="radios" class="form-check-input" id="status_published">
                                    <label class="form-check-label" for="status_published">Published</label>
                                </div>
                                <div class="form-check">
                                    <input type="radio" name="radios" class="form-check-input" id="status_draft" checked>
                                    <label class="form-check-label" for="status_draft">Draft</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </main>`;
    }
}