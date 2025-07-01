import { PageTemplate } from "../templates/PageTemplate.js";

export class PageMovies extends PageTemplate {
    main() {
        return `
            <main class ="container"> 
                <div class="row">
                    <div class="col-12">
                        MOVIES PAGE CONTENT
                    </div>
                </div>
            </main>
        `;
    }
}