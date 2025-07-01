import { PageTemplate } from "../templates/PageTemplate.js";

export class PageCategories extends PageTemplate{
    main() {
        return `
            <main class ="container"> 
                <div class="row">
                    <div class="col-12">
                        CATEGORIES PAGE CONTENT
                    </div>
                </div>
            </main>
        `;
    }
}