function changeImage(imageUrl, birdName, photographer) {
    document.getElementById('bird-image').src = imageUrl;
    document.getElementById('bird-image').alt = birdName;
    document.getElementById('photographer').textContent = `${birdName} by ${photographer}`;
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});
