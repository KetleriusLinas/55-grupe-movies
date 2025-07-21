export function categoriesListSection(data) {
    let HTML = '';

    for (const item of data) {
        HTML += `
            <div class="feature col my-4">
                <h3 class="fs-2 text-body-emphasis">${item.title}</h3>
                <p>${item.description}</p>
                <p>Movies count: ${item.moviesCount}</p>
                <a href="/categories/${item.url_slug}" class="icon-link">Read more</a>
            </div>`;
    }

    return `
        <div class="container px-4 py-5" id="featured-3">
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">${HTML}</div>
        </div>`;
}