import { PageTemplate } from "../templates/PageTemplate.js";

export class PageLogin extends PageTemplate {
    main() {
        return `
            <main class ="container"> 
                <div class="row">
                    <div class="col-12">
                        LOGIN PAGE CONTENT
                    </div>
                </div>
            </main>
        `;
    }
}