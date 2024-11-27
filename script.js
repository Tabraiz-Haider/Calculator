document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        backspace();
    } else if (event.key === '.') {
        appendToDisplay('.');
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === '%') {
        appendToDisplay('%');
    } else if (event.key === ' ') {
        event.preventDefault();
    }
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display').value;
    display = display.replace(/sqrt\(([^)]+)\)/g, function(_, val) {
        return Math.sqrt(eval(val));
    });
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}
