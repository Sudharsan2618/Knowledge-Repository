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


// Save the current page to localStorage when a navigation link is clicked
function loadContent(page) {
    const mainContent = document.getElementById("main-content");
    fetch(page)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
            // Save the page path in localStorage
            localStorage.setItem('lastVisitedPage', page);
        })
        .catch(error => {
            mainContent.innerHTML = `<p>Error loading content: ${error}</p>`;
        });
}

// Load the last visited page or default content on page load
document.addEventListener('DOMContentLoaded', function() {
    const lastPage = localStorage.getItem('lastVisitedPage') || 'python-getting-started.html';
    loadContent(lastPage);
});

// Function to show the selected navigation section
function showNavContent(type) {
    document.getElementById("tutorial-nav").style.display = 'none';
    document.getElementById("interview-nav").style.display = 'none';
    document.getElementById("test-nav").style.display = 'none';

    if (type === 'tutorial') {
        document.getElementById("tutorial-nav").style.display = 'block';
    } else if (type === 'interview') {
        document.getElementById("interview-nav").style.display = 'block';
    } else if (type === 'test') {
        document.getElementById("test-nav").style.display = 'block';
    }

    // Save the navigation type in localStorage
    localStorage.setItem('lastNavType', type);
}


// Load the last navigation section on page load
window.onload = function() {
    const lastNavType = localStorage.getItem('lastNavType') || 'tutorial';
    showNavContent(lastNavType);
};