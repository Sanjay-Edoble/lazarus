    
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
    
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        navLinks.classList.toggle('active');
    });