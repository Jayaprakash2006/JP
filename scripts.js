// Example of handling the modal for login and signup

document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginModal').style.display = 'block';
};

document.getElementById('closeLogin').onclick = function() {
    document.getElementById('loginModal').style.display = 'none';
};

// Same for signup modal
document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('signupMessage').innerText = "Signed up successfully!";
};

// Check slots form submission
document.getElementById('checkSlotsForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('availableSlots').innerText = "Available slots: 50+";
};

// View amount button click
document.getElementById('viewAmountBtn').onclick = function() {
    document.getElementById('amountDisplay').innerText = "Total Amount: ₹100/hour";
};
