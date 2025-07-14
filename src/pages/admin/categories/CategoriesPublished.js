import { getPublishedCategories } from "../../../db/getPublishedCategories.js";
import { AdminTemplate } from "../../../templates/AdminTemplate.js";
import { tableCategories } from "../../../ui/tables/tableCategories.js";

export class PageAdminCategoriesPublished extends AdminTemplate {
    async main() {
        const data = await getPublishedCategories();

        return `
            <main> 
                <div class="container">
                    <div class="row">
                        <div class="col-12">  
                            <h1 class="display-5">Published Categories</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            ${tableCategories(data)}
                        </div>
                    </div>
                </div>
            </main>`;
    }
}
