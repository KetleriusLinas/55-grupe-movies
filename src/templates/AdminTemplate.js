import { commonHeaderMenuData } from "../data/headerData.js";

export class AdminTemplate {
    constructor(req) {
        this.req = req;
        this.pageJS = '';
    }

    head() {
        return `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Express example</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Coming soon" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="stylesheet" href="/css/bootstrap.min.css">
            </head>`;
    }

    header() {
        let HTML = '';

        for (const link of commonHeaderMenuData) {
            HTML += `
                <li>
                    <a href="${link.href}" class="nav-link px-2">${link.text}</a>
                </li>`;
        }

        return `
            <div class="container-fluid">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div class="col-md-3 mb-2 mb-md-0">
                        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                            <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap" viewBox="0 0 118 94">
                                <title>Bootstrap</title>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
                            </svg>
                        </a>
                    </div>
                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">${HTML}</ul>
                    <div class="col-md-3 text-end">
                        <a href="/admin" class="btn btn-primary">Dashboard</a>
                    </div>
                </header>
            </div>`;
    }

    footer() {
        let HTML = '';

        for (const link of commonHeaderMenuData) {
            HTML += `
                <li class="nav-item">
                    <a href="${link.href}" class="nav-link px-2 text-body-secondary">${link.text}</a>
                </li>`;
        }

        return `
            <div class="container-fluid">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p class="col-md-4 mb-0 text-body-secondary">&copy; 2025 Company, Inc</p>
                    <ul class="nav col-md-4 justify-content-end">${HTML}</ul>
                </footer>
            </div>`;
    }

    script() {
        if (!this.pageJS) {
            return '';
        }

        return `<script src="/js/${this.pageJS}.js" type="module"></script>`;
    }

    sidebar() {
        return `
            <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                    <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 
                                ${this.req.url === '/admin' ? 'active' : ''}" 
                                aria-current="page"  href="/admin">
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                            <span>Categories</span>
                        </h6>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 
                                ${this.req.url === '/admin/categories/new' ? 'active' : ''}" aria-current="page" href="/admin/categories/new">
                                    New category
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 
                                ${this.req.url === '/admin/categories' ? 'active' : ''}"
                                 aria-current="page" href="/admin/categories">
                                    All categories
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 
                                ${this.req.url === '/admin/categories/published' ? 'active' : ''}" aria-current="page" href="/admin/categories/published">
                                    Published categories
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2 
                                ${this.req.url === '/admin/categories/draft' ? 'active' : ''}" aria-current="page" href="/admin/categories/draft">
                                    Draft categories
                                </a>
                            </li>
                        </ul>
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                            <span>Movies</span>
                        </h6>
                        <ul class="nav nav-pills flex-column mb-auto">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2" href="#">
                                    New movie
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2" href="#">
                                    All movies
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2" href="#">
                                    Published movies
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center gap-2" href="#">
                                    Draft movies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }
    main() {
        return `
            <h2>Section title</h2>
            <div class="table-responsive small">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1,001</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>1,002</td>
                            <td>placeholder</td>
                            <td>irrelevant</td>
                            <td>visual</td>
                            <td>layout</td>
                        </tr>
                        <tr>
                            <td>1,003</td>
                            <td>data</td>
                            <td>rich</td>
                            <td>dashboard</td>
                            <td>tabular</td>
                        </tr>
                        <tr>
                            <td>1,003</td>
                            <td>information</td>
                            <td>placeholder</td>
                            <td>illustrative</td>
                            <td>data</td>
                        </tr>
                        <tr>
                            <td>1,004</td>
                            <td>text</td>
                            <td>random</td>
                            <td>layout</td>
                            <td>dashboard</td>
                        </tr>
                        <tr>
                            <td>1,005</td>
                            <td>dashboard</td>
                            <td>irrelevant</td>
                            <td>text</td>
                            <td>placeholder</td>
                        </tr>
                        <tr>
                            <td>1,006</td>
                            <td>dashboard</td>
                            <td>illustrative</td>
                            <td>rich</td>
                            <td>data</td>
                        </tr>
                        <tr>
                            <td>1,007</td>
                            <td>placeholder</td>
                            <td>tabular</td>
                            <td>information</td>
                            <td>irrelevant</td>
                        </tr>
                        <tr>
                            <td>1,008</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>1,009</td>
                            <td>placeholder</td>
                            <td>irrelevant</td>
                            <td>visual</td>
                            <td>layout</td>
                        </tr>
                        <tr>
                            <td>1,010</td>
                            <td>data</td>
                            <td>rich</td>
                            <td>dashboard</td>
                            <td>tabular</td>
                        </tr>
                        <tr>
                            <td>1,011</td>
                            <td>information</td>
                            <td>placeholder</td>
                            <td>illustrative</td>
                            <td>data</td>
                        </tr>
                        <tr>
                            <td>1,012</td>
                            <td>text</td>
                            <td>placeholder</td>
                            <td>layout</td>
                            <td>dashboard</td>
                        </tr>
                        <tr>
                            <td>1,013</td>
                            <td>dashboard</td>
                            <td>irrelevant</td>
                            <td>text</td>
                            <td>visual</td>
                        </tr>
                        <tr>
                            <td>1,014</td>
                            <td>dashboard</td>
                            <td>illustrative</td>
                            <td>rich</td>
                            <td>data</td>
                        </tr>
                        <tr>
                            <td>1,015</td>
                            <td>random</td>
                            <td>tabular</td>
                            <td>information</td>
                            <td>text</td>
                        </tr>
                    </tbody>
                </table>
            </div>`;
    }

    render() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head()}
            <body>
                ${this.header()}
                <div class="container-fluid min-vh-100">
                    <div class="row">
                        ${this.sidebar()}
                        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            ${this.main()}
                        </main>
                    </div>
                </div>
                ${this.footer()}
                ${this.script()}
            </body>
            </html>`;
    }
}