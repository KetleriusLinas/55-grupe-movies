import { AdminTemplate } from "../../../templates/AdminTemplate.js";

export class PageAdminMoviesNew extends AdminTemplate {
    main() {
        return `
            <main> 
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">  
                            <h1 class="display-5">New Movies</h1>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}
