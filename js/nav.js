const checkbox = document.getElementById('checkbox');
const mainNav = document.getElementById('main-nav');

checkbox.addEventListener('click', function() {
  mainNav.classList.toggle('show-menu');
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#main-nav ul li a'); // Select all nav links

    // Function to set the active link
    function setActiveLink(targetLink) {
        navLinks.forEach(link => {
            // Remove 'active' class from all links
            link.parentElement.classList.remove('active'); 
            // Add 'active' class to the clicked link
            if (link === targetLink) {
                link.parentElement.classList.add('active');
            }
        });
    }

    // Initially set "Porter Services" as active (assuming its link has a specific ID or class)
    const porterServicesLink = document.querySelector('#porter-services-link'); // Replace with actual selector
    if (porterServicesLink) {
        setActiveLink(porterServicesLink); 
    }

    // Add click event listeners to all links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            setActiveLink(this); // 'this' refers to the clicked link
        });
    });
});

