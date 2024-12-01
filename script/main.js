document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

function showNav(navId) {
    const navContents = document.querySelectorAll('.nav-content');
    navContents.forEach(nav => {
        nav.style.display = 'none';
    });
    document.getElementById(navId).style.display = 'block';
}