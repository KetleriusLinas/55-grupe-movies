import { PageTemplate } from "../templates/PageTemplate.js";
import { pageTitle } from "../ui/pageTitle.js";
import { placeholder } from "../ui/placeholder.js";

export class PageRegister extends PageTemplate {
    main() {
        return `
            <main> 
                    ${pageTitle('Register')}
                    ${placeholder('Form', [
                'email',
                'username',
                'password',
                'sutinku su taisyklemis',
                'mygtukas'])}
            </main>`;
    }
}