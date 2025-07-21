const movieImageFormDOM = document.forms[0];
const imageDOM = document.getElementById('img');

const movieDetailsFormDOM = document.forms[1];
const titleDOM = document.getElementById('title');
const urlDOM = document.getElementById('url');
const descriptionDOM = document.getElementById('description');
const durationHoursDOM = document.getElementById('duration_hours');
const durationMinutesDOM = document.getElementById('duration_minutes');
const categoryDOM = document.getElementById('category');
const releaseDateDOM = document.getElementById('release_date');
const ratingDOM = document.getElementById('rating');
const statusPublishedDOM = document.getElementById('status_published');
const statusDraftDOM = document.getElementById('status_draft');

if (movieImageFormDOM) {
    imageDOM.addEventListener('change', () => {
        console.log(imageDOM.value);

        fetch('/api/admin/upload-image', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
            },
            // body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(console.error);
    });
}

if (movieDetailsFormDOM) {
    movieDetailsFormDOM.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            title: titleDOM.value,
            url: urlDOM.value,
            category: +categoryDOM.value,
            status: '',
        };

        if (descriptionDOM.value) {
            data.description = descriptionDOM.value;
        }

        if (durationHoursDOM.value || durationMinutesDOM.value) {
            let h = 0;
            if (Number.isInteger(+durationHoursDOM.value)) {
                h = +durationHoursDOM.value;
            }

            let min = 0;
            if (Number.isInteger(+durationMinutesDOM.value)) {
                min = +durationMinutesDOM.value;
            }

            data.duration = h * 60 + min;
        }

        if (releaseDateDOM.value) {
            data.releaseDate = releaseDateDOM.value;
        }

        if (ratingDOM.value) {
            data.rating = +ratingDOM.value;
        }

        if (statusPublishedDOM.checked) {
            data.status = 'published';
        }
        if (statusDraftDOM.checked) {
            data.status = 'draft';
        }

        fetch('/api/admin/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(console.error);
    })
}