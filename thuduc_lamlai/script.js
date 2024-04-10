const searchButton = document.getElementById('searchButton');
const searchBar = document.getElementById('searchBar');
const backButton = document.getElementById('backButton');

searchButton.addEventListener('click', () => {
    searchButton.style.display = 'none';
    searchBar.style.display = 'flex';
    backButton.style.display = 'block';
});

backButton.addEventListener('click', () => {
    searchButton.style.display = 'block';
    searchBar.style.display = 'none';
    backButton.style.display = 'none';
});
