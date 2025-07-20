const deleteButtonsDOM = document.querySelectorAll('table button');

for (const btnDOM of deleteButtonsDOM) {
    btnDOM.addEventListener('click', () => {
        fetch('/api/admin/movies/' + btnDOM.dataset.url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    // btnDOM.parentElement.parentElement.remove();
                    btnDOM.closest('tr').remove();
                }
            })
            .catch(console.error);
    });
}