let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function deleteLastElement() {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
function squareElement(){
  let currentValue = display.value;
  display.value = currentValue * currentValue;
}

function squareRootElement(){
  let currentValue = display.value;
  display.value = Math.sqrt(currentValue);
}
