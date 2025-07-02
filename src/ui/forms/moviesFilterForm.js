export function moviesFilterForm() {
    return `
        <div class="container mb-5">
            <form class="row">
                <div class="col-12 col-xl-6">
                    <label for="title" class="form-label">Pavadinimas</label>
                    <input type="text" class="form-control" id="title" placeholder="Filtruoti pagal pavadinimą ar aprašą">
                </div>
                <div class="col-12 col-md-4 col-xl-2">
                    <label for="duration" class="form-label">Trukmė</label>
                    <select id="duration" class="form-control">
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
                    <select id="category" class="form-control">
                        <option value="0">Visos</option>
                        <option value="1">Action</option>
                        <option value="2">Crime</option>
                        <option value="3">Comedy</option>
                    </select>
                </div>
                <div class="col-12 col-md-4 col-xl-2">
                    <label for="rating" class="form-label">Reitingas</label>
                    <select id="rating" class="form-control">
                        <option value="0">Visi</option>
                        <option value="2">1+</option>
                        <option value="3">2+</option>
                        <option value="4">3+</option>
                        <option value="5">4+</option>
                    </select>
                </div>
            </form>
        </div>
        `;
}