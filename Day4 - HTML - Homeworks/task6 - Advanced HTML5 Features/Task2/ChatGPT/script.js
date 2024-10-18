// Check for saved color in localStorage
window.onload = function() {
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById('currentColor').innerText = savedColor;
        document.getElementById('colorPicker').value = savedColor;
    }
};

// Save the selected color to localStorage
document.getElementById('saveColor').onclick = function() {
    const selectedColor = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = selectedColor;
    document.getElementById('currentColor').innerText = selectedColor;
    localStorage.setItem('themeColor', selectedColor);
};
