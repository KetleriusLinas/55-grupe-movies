import { PageTemplate } from "../../templates/PageTemplate.js";

export class PageDashboard extends PageTemplate {
    main() {

        const cookie = this.req.user.login_token_created_at.getTime();
        const cookieMaxAge = 3600;
        const secondsLeft = Math.floor(COOKIE_MAX_AGE - (Date.now() - cookie) / 1000);

        const seconds = secondsLeft % 60;
        const minutes = (secondsLeft - seconds) / 60;



        return `
            <main> 
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">  
                            <h1 class="display-1">Welcome to dashboard</h1>
                            <p class="display-6">User:${this.req.user.username}</p>
                            <p class="display-6">Email:${this.req.user.email}</p>
                            <p class="display-6">Likes sesijos laikas: ${minutes}:${seconds}</p>
                        </div>
                    </div>
                </div>
            </main>`;
    }
}
