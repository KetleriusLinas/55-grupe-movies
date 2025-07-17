import { formatDuration } from "../../lib/formatDuration.js";

export function tableMovies(data) {
    let HTML = '';
    let nr = 1;

    for (const movie of data) {
        HTML += `
            <tr>
                <th scope="row">${nr++}</th>
                <td><img src="#" alt="Movie thumbnail"></td>
                <td><a href="/admin/movies/${movie.url_slug}">${movie.title}</a></td>
                <td>${movie.description
                ? '<span class="badge text-bg-success">Provided</span>'
                : '<span class="badge text-bg-warning">Empty</span>'}</td>
                <td>${formatDuration(movie.duration_in_minutes)}</td>
                <td>${movie.categoryName ? movie.categoryName : '<span class="badge text-bg-warning">Not selected</span>'}</td>
                <td>${movie.statusName === 'published'
                ? '<span class="badge text-bg-success">Published</span>'
                : '<span class="badge text-bg-warning">Draft</span>'}</td>
                <td class="d-flex gap-3">
                    <a class="btn btn-primary btn-sm" href="/admin/movies/${movie.url_slug}/edit">Edit</a>
                    <button data-url="${movie.url_slug}" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>`;
    }

    return `
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Category</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>${HTML}</tbody>
            </table>
        </div>`;
}