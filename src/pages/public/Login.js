import { PageTemplate } from "../../templates/PageTemplate.js";
import { loginForm } from "../../ui/forms/loginForm.js";
import { pageTitle } from "../../ui/pageTitle.js";

export class PageLogin extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'login';
    }

  async  main() {
        return `
            <main> 
                ${pageTitle('Login')}
                ${loginForm('Login')}
            </main>`;
    }
}