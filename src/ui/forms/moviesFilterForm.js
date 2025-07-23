import { getAllPublicCategories } from "../../db/public/getAllCategories.js";

export async function moviesFilterForm(params) {
    const duration = params.duration ? params.duration : '';
    const category = params.category ? params.category : '';
    const rating = params.rating ? params.rating : '';

    const categories = await getAllPublicCategories();
    let categoriesHTML = '';

    for (const cat of categories) {
        categoriesHTML += `<option value="${cat.url_slug}">${cat.title}</option>`;
    }


    return `
        <div class="container mb-5">
            <form class="row g-3">
                <div class="col-12 col-xl-4">
                    <label for="title" class="form-label">Pavadinimas</label>
                    <input type="text" class="form-control" id="title" placeholder="Filtruoti pagal pavadinimą ar aprašą">
                </div>
                <div class="col-12 col-md-4 col-xl-2">
                    <label for="duration" class="form-label">Trukmė</label>
                    <select id="duration" class="form-control" name="duration">
                        <option value="0">Visi</option>
                        <option value="1">0+ hour</option>
                        <option value="2">1+ hour</option>
                        <option value="3">2+ hour</option>
                        <option value="4">3+ hour</option>
                        <option value="5">4+ hour</option>
                    </select>
                </div>
                <div class="col-12 col-md-4 col-xl-2">
                    <label for="category" class="form-label">Kategorija</label>
                    <select id="category" class="form-control" name="category">
                        <option value="0">Visos</option>
                        ${categoriesHTML}
                    </select>
                </div>
                <div class="col-12 col-md-4 col-xl-2">
                    <label for="rating" class="form-label">Reitingas</label>
                    <select id="rating" class="form-control" name="rating">
                        <option value="0">Visi</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                </div>
                <div class="col-12 col-xl-2 d-flex">
                    <button type="submit" class="btn btn-primary w-100">Filtruoti</button>
                </div>
            </form>
        </div>
        `;
}