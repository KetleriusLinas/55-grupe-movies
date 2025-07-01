export function placeholder(title,list) {
    let HTML = '';

    if (Array.isArray(list)) {
        for (const item of list) {
            HTML += `<li>${item}</li>`
        }
    }


    return `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <h3>${title}</h3> 
            ${HTML ? `<ul>${HTML}</ul>` : ''}
        </div>`;
}