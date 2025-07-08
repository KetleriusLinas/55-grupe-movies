import { PageTemplate } from "../../templates/PageTemplate.js";
import { heroSection } from "../../ui/hero.js";

export class PageHome extends PageTemplate {
        constructor(req) {
        super(req);
    }
    
    main() {
        return `
            <main> 
                 ${heroSection()}
            </main>`;
    }
}