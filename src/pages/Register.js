import { PageTemplate } from "../templates/PageTemplate.js";

export class PageRegister extends PageTemplate {
    main() {
        return `
            <main class ="container"> 
                <div class="row">
                    <div class="col-12">
                        REGISTER PAGE CONTENT
                    </div>
                </div>
            </main>
        `;
    }
}