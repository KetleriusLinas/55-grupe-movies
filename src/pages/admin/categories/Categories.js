import { AdminTemplate } from "../../../templates/AdminTemplate.js";
import { tableCategories } from "../../../ui/tables/tableCategories.js";

export class PageAdminCategories extends AdminTemplate {
    main() {
        const data = [
            {
                id: 1,
                title: 'Action',
                url: 'action',
                description: 'Lorem ipsum...',
                isPublished: true,
                moviesCount: 0,
            }, {
                id: 2,
                title: 'Crime',
                url: 'crime',
                description: 'Lorem ipsum...',
                isPublished: false,
                moviesCount: 0,
            }, {
                id: 3,
                title: 'Sci-Fi',
                url: 'sci-fi',
                description: 'Lorem ipsum...',
                isPublished: true,
                moviesCount: 0,
            }
        ];

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