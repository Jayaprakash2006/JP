document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();

    // Get email and password values
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Here you would typically send a request to your server to validate the user
    // For this example, we simply check if the fields are filled and show a message
    if (email && password) {
        document.getElementById('loginMessage').innerText = "Login successful! Redirecting to home...";

        // Simulating a delay before redirecting (you can remove this in production)
        setTimeout(() => {
            window.location.href = "index.html"; // Redirect to home page
        }, 2000); // Redirect after 2 seconds
    } else {
        document.getElementById('loginMessage').innerText = "Please fill in all fields.";
    }

    // Reset form fields if needed
    document.getElementById('loginForm').reset();
};
