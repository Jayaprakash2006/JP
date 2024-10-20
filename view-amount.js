document.getElementById('viewAmountBtn').onclick = function() {
    // Assuming the parking cost is fixed
    const costPerHour = 100; // Rs 100 per hour
    const hours = 1; // Example: fixed to 1 hour for simplicity
    const totalAmount = costPerHour * hours;

    // Update the amount display
    document.getElementById('amountDisplay').innerText = `Total Amount: ₹${totalAmount}`;
};
