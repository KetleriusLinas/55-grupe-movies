import { PageTemplate } from "../templates/PageTemplate.js";

export class PageHome extends PageTemplate{
    main() {
        return `
            <main class ="container"> 
                <div class="row">
                    <div class="col-12">
                        HOME PAGE CONTENT
                    </div>
                </div>
            </main>
        `;
    }
}