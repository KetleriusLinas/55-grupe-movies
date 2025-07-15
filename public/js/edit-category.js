const formDOM = document.forms[0];
const titleDOM = document.getElementById('title');
const originalUrlDOM = document.getElementById('original_url');
const urlDOM = document.getElementById('url');
const descriptionDOM = document.getElementById('description');
const statusPublishedDOM = document.getElementById('status_published');
const statusDraftDOM = document.getElementById('status_draft');

if (formDOM) {
    formDOM.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            title: titleDOM.value,
            url: urlDOM.value,
            status: 'draft',
        };

        if (descriptionDOM.value) {
            data.description = descriptionDOM.value;
        }

        if (statusPublishedDOM.checked) {
            data.status = 'published';
        }

        fetch('/api/admin/categories/' + originalUrlDOM.value, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success' && data.action === 'redirect') {
                    location.href = data.href;
                }
            })
            .catch(console.error);
    });
}