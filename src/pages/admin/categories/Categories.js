import { AdminTemplate } from "../../../templates/AdminTemplate.js";
import { tableCategories } from "../../../ui/tables/tableCategories.js";
import { getAllCategories } from "../../../db/getAllCategories.js"

export class PageAdminCategories extends AdminTemplate {
    constructor(req){
        super(req);
        this.pageJS = 'category-list';
    }

    async main() {

        const data = await getAllCategories();

        return `
            <main>
               <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-5">All categories</h1>
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