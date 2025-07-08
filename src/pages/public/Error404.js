import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageError404 extends PageTemplate {
        constructor(req) {
        super(req);
    }
    main() {
        return `
            <main class ="container"> 
                <div class="row">
                    <div class="col-12">
                        404 PAGE CONTENT
                    </div>
                </div>
            </main>`;
    }
}