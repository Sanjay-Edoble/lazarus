  // Toggle navigation menu
  document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form input values
    const name = document.getElementById("email").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember").checked;
    window.location.href = "dashboard.html";
});
