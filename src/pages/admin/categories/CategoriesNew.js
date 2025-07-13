import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminCategoriesNew extends AdminTemplate {
    main() {
        return `
            <main> 
                <div class="container">
                    <div class="row">
                        <div class="col-12">  
                            <h1 class="display-5">New Category</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row"> 
                        <form class="col-12 col-md-9 col-lg-6">
                                <div class="mb-3">
                                    <label for="Title" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="Title" required>
                                </div>
                                <div class="mb-3">
                                    <label for="url" class="form-label">Url slug</label>
                                    <input type="text" class="form-control" id="url" required>
                                </div>                               
                                 <div class="mb-3">
                                    <label for="Description" class="form-label">Description</label>
                                    <textarea class="form-control" id="Description"></textarea>
                                </div>
                                <div class="mb-3">
                                        <label class="form-label">Status</label>
                                    <div class="form-check">
                                        <input type="radio" name="radios" class="form-check-input" id="status_published" required>
                                        <label class="form-check-label" for="status_published">Published</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" name="radios" class="form-check-input" id="status_draft" checked required>
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
