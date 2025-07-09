export function tableCategories(data) {
    let HTML = '';
    let nr = 1;

    for (const category of data) {
        HTML += `
            <tr>
                <th scope="row">${nr++}</th>
                <td><a href="/admin">${category.title}</a></td>
                <td>${category.url}</td>
                <td>${category.description}</td>
                <td>${category.moviesCount}</td>
                <td>${category.isPublished ? 'Published' : 'Draft'}</td>
                <td>
                    <a class="btn btn-primary btn-sm" href="/admin">Edit</a>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>`;
    }

    return `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Url</th>
                    <th scope="col">Description</th>
                    <th scope="col">Movies count</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>${HTML}</tbody>
        </table>`;
}