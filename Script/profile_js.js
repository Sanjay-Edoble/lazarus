// Toggle the visibility of the navigation links on hamburger click
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your login logic here
    console.log('Login attempt:', { email, password });
    
    //login success
    window.location.href = 'dashboard.html';
});