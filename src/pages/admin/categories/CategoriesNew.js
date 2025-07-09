import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminCategoriesNew extends AdminTemplate {
    main() {
        return `
            <main> 
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">  
                            <h1 class="display-5">New Category</h1>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}
