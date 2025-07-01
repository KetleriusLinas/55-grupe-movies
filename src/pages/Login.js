import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageLogin extends PageTemplate {
    main() {
        return `
            <main> 
                ${pageTitle('Login')}
                ${placeholder('Form', [
            'email/username',
            'password',
            'mygtukas',
        ])}

            </main>`;
    }
}