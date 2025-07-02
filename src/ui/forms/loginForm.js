export function loginForm() {
    return `
<div class="container">
    <div class="row">
        <form class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div class="mb-4">
                <label for="username_or_email">Email or Username</label>
                <input id="username_or_email" type="text" class="form-control" required>
            </div>
            <div class="mb-4">
                <label for="password">Password</label>
                <input id="password" type="password" class="form-control" required>
            </div>
            <div class="mb-4">
                <button type="submit" class="btn btn-primary w-100 py-2 fs-5">Login</button>
            </div>
        </form>
    </div>
</div>
    `;
}