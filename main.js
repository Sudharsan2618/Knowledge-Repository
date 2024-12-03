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


function loadContent(page) {
    const mainContent = document.getElementById("main-content");
    fetch(page)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => {
            mainContent.innerHTML = `<p>Error loading content: ${error}</p>`;
        });
}

// Load the default content (python-tutorial.html) when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadContent('python-tutorial.html');
});