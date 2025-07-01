import { commonHeaderMenuData } from "../data/headerData.js";

export class PageTemplate {
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
        return `
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div class="col-md-3 mb-2 mb-md-0">
                        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                            <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap" viewBox="0 0 118 94">
                                <title>Bootstrap</title>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
                            </svg>
                        </a>
                    </div>
                    ${this.headerMenu(commonHeaderMenuData)}
                    <div class="col-md-3 text-end">
                        <button type="button" class="btn btn-outline-primary me-2">Login</button>
                        <button type="button" class="btn btn-primary">Sign-up</button>
                    </div>
                </header>
            </div>`;
    }

    headerMenu(data) {
        let HTML = '';

        for (const link of data) {
            HTML += `
                <li>
                    <a href="${link.href}" class="nav-link px-2">${link.text}</a>
                </li>`;
        }

        return `<ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">${HTML}</ul>`;
    }

    footer() {
        return `
            <footer class="container bg-dark">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4">
                        <img class="logo" src="/img/logo.webp" alt="Logo">
                        <p>Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.</p>
                        <div>
                            <a href="#" target="_blank">SOC</a>
                            <a href="#" target="_blank">SOC</a>
                            <a href="#" target="_blank">SOC</a>
                            <a href="#" target="_blank">SOC</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <p>Electricity service</p>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-2">
                        <p>Quick links</p>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <p>Contact us</p>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </div>
                </div>
                <div class="row">
                    <p class="col-12">&copy; Copyright 2024 - Current. All Right Reserved</p>
                </div>
            </footer>`;
    }

    script() {
        if (!this.pageJS) {
            return '';
        }

        return `<script src="/js/${this.pageJS}.js" type="module"></script>`;
    }

    main() {
        return '<main>CONTENT...</main>';
    }

    render() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head()}
            <body>
                ${this.header()}
                ${this.main()}
                ${this.footer()}
                ${this.script()}
            </body>
            </html>`;
    }
}