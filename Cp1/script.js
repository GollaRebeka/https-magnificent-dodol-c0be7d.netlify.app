// Reference to display
let display = document.getElementById("display");

// Append values to display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate square
function calculateSquare() {
    if (display.value) {
        display.value = Math.pow(eval(display.value), 2);
    }
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert("Invalid Input!");
        clearDisplay();
    }
}