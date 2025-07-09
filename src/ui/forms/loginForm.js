// import { NODE_ENV } from "../../env.js";

export function loginForm() {

    let email = '';
    let password = '';

    // if (NODE_ENV === 'dev') {
    //     email = 'milijonas@jonas12';
    //     password = 'milijonas@jonas12';
    // }

    return `
<div class="container">
    <div class="row">
        <form class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div class="mb-4">
                <label for="username_or_email">Username or Email</label>
                <input value="" id="username_or_email" type="text" class="form-control" required>
            </div>
            <div class="mb-4">
                <label for="password">Password</label>
                <input value="" id="password" type="password" class="form-control" required>
            </div>
            <div class="mb-4">
                <button type="submit" class="btn btn-primary w-100 py-2 fs-5">Login</button>
            </div>
        </form>
    </div>
</div>
    `;
}