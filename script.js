function showLoading() {
    document.getElementById('loading').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('modal').style.display = 'flex';
    }, 2000);
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
