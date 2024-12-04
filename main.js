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
    loadContent('python-getting-started.html');
});

// Function to show content based on selected navigation item
function showNavContent(type) {
    // Hide all sections
    document.getElementById("tutorial-nav").style.display = 'none';
    document.getElementById("interview-nav").style.display = 'none';
    document.getElementById("test-nav").style.display = 'none';
    
    // Show the selected section
    if (type === 'tutorial') {
        document.getElementById("tutorial-nav").style.display = 'block';
    } else if (type === 'interview') {
        document.getElementById("interview-nav").style.display = 'block';
    } else if (type === 'test') {
        document.getElementById("test-nav").style.display = 'block';
    }
}

// Default load tutorial content on page load
window.onload = function() {
    showNavContent('tutorial');
}