document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();

    // Get email and password values
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Here you would typically send a request to your server to create a new user
    // For this example, we simply show a message and redirect
    document.getElementById('signupMessage').innerText = "Signup successful! Redirecting to home...";

    // Simulating a delay before redirecting (you can remove this in production)
    setTimeout(() => {
        window.location.href = "index.html"; // Redirect to home page
    }, 2000); // Redirect after 2 seconds

    // Reset form fields
    document.getElementById('signupForm').reset();
};
