// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const homeLink = document.getElementById('home-link');
    
    // Add click event to logo for home navigation
    homeLink.addEventListener('click', function() {
        window.location.href = 'home.html';
    });
    
    // Mouseover feedback for nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Set active page based on current URL
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});