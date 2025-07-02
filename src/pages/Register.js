import { PageTemplate } from "../templates/PageTemplate.js";
import { registerForm } from "../ui/forms/registerForm.js";
import { pageTitle } from "../ui/pageTitle.js";

export class PageRegister extends PageTemplate {
    main() {
        return `
            <main> 
                    ${pageTitle('Register')}
                    ${registerForm()}
            </main>`;
    }
}