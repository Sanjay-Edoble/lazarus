  // Toggle navigation menu
  document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your login logic here
    console.log('Login attempt:', { email, password });
    
    // Simulate login success
    
    window.location.href ='dashboard.html';
});