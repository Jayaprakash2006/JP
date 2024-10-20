document.getElementById('checkSlotsForm').onsubmit = function(e) {
    e.preventDefault();
    
    // Get the selected location
    const location = document.getElementById('location').value;
    
    // For simplicity, we assume all locations have the same number of available slots
    const availableSlots = 50; // You can change this to fetch from a database or API
    document.getElementById('slotInfo').innerText = `Available slots in ${location}: ${availableSlots}+`;
};
