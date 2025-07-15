import { getCategoryByUrlSlug } from "../../../db/admin/getCategoryByUrlSlug.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminCategoriesView extends AdminTemplate {
    async main() {
        const data = await getCategoryByUrlSlug(this.req.params.urlSlug);
        const category = data[0];

        return `
            <main>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-5">"${category.title}" category details</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-9 col-lg-6">
                            <table class="table table-bordered border-primary">
                                <tbody>
                                    <tr class="mb-3">
                                        <td>Title</td>
                                        <td>${category.title}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Url slug</td>
                                        <td>${category.url_slug}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Description</td>
                                        <td>${category.description}</td>
                                    </tr>
                                    <tr class="mb-3">
                                        <td>Status</td>
                                        <td>${category.statusName}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}