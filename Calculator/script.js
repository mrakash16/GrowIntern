let display = document.getElementById('display');
let historyElement = document.getElementById('history');
let lastCalculation = null;
let isScientificMode = false; // Initially set to false for basic mode

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    const expression = display.value;
    const result = eval(expression);

    if (!isNaN(result) && expression !== lastCalculation) {
      const historyEntry = `${expression} = ${result}`;
      historyElement.innerHTML = `${historyEntry}<br>${historyElement.innerHTML}`;
      display.value = result;
      lastCalculation = expression;
    } else {
      display.value = 'Error';
    }
  } catch (error) {
    display.value = 'Error';
  }
}

function clearHistory() {
  historyElement.innerHTML = '';
  lastCalculation = null;
}

// Function to set the display style based on the current mode
function setDisplayStyle() {
  const basicKeys = document.getElementById('calculator-keys-basic');
  const scientificKeys = document.getElementById('calculator-keys-scientific');

  if (isScientificMode) {
    basicKeys.style.display = 'none';
    scientificKeys.style.display = 'grid';
  } else {
    basicKeys.style.display = 'grid';
    scientificKeys.style.display = 'none';
  }
}

// Function to toggle between basic and scientific modes
function toggleMode() {
  isScientificMode = !isScientificMode;
  setDisplayStyle();
}

// Set the initial display style when the page loads
window.onload = function () {
  setDisplayStyle();
};

// Additional Functions
function sin() {
  display.value = Math.sin(getAngle());
}

function cos() {
  display.value = Math.cos(getAngle());
}

function tan() {
  display.value = Math.tan(getAngle());
}

function degrees() {
  display.value = (parseFloat(display.value) * (180 / Math.PI)).toFixed(2);
}

function sinInv() {
  display.value = Math.asin(display.value);
}

function cosInv() {
  display.value = Math.acos(display.value);
}

function tanInv() {
  display.value = Math.atan(display.value);
}

function pi() {
  appendToDisplay(Math.PI.toFixed(8));
}

function e() {
  appendToDisplay(Math.E.toFixed(8));
}

function pow() {
  appendToDisplay('**');
}

function cube() {
  display.value = Math.pow(parseFloat(display.value), 3);
}

function square() {
  display.value = Math.pow(parseFloat(display.value), 2);
}

function exp() {
  display.value = Math.exp(parseFloat(display.value)).toFixed(8);
}

function tenPow() {
  display.value = Math.pow(10, parseFloat(display.value)).toFixed(8);
}

function yRoot() {
  appendToDisplay('**(1/');
}

function cubeRoot() {
  display.value = Math.pow(parseFloat(display.value), 1 / 3);
}

function sqrt() {
  display.value = Math.sqrt(parseFloat(display.value));
}

function ln() {
  display.value = Math.log(parseFloat(display.value)).toFixed(8);
}

function log() {
  display.value = Math.log10(parseFloat(display.value)).toFixed(8);
}

function openBracket() {
  appendToDisplay('(');
}

function closeBracket() {
  appendToDisplay(')');
}

function reciprocal() {
  display.value = (1 / parseFloat(display.value)).toFixed(8);
}

function percentage() {
  display.value = (parseFloat(display.value) / 100).toFixed(8);
}

function factorial() {
  const num = parseInt(display.value);
  if (num < 0) {
    display.value = 'Error';
    return;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  display.value = result;
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function ans() {
  const lastAnswer = historyElement.firstChild.textContent.split('=')[1];
  if (lastAnswer) {
    display.value += lastAnswer.trim();
  }
}

function memoryAdd() {
  const currentValue = parseFloat(display.value) || 0;
  const memoryValue = parseFloat(localStorage.getItem('memory')) || 0;
  localStorage.setItem('memory', currentValue + memoryValue);
}

function memorySub() {
  const currentValue = parseFloat(display.value) || 0;
  const memoryValue = parseFloat(localStorage.getItem('memory')) || 0;
  localStorage.setItem('memory', memoryValue - currentValue);
}

function memoryRecall() {
  display.value = localStorage.getItem('memory') || 0;
}

function negate() {
  display.value = (-parseFloat(display.value)).toFixed(8);
}

function getAngle() {
  return isScientificMode ? parseFloat(display.value) : parseFloat(display.value) * (Math.PI / 180);
}

function expBtn() {
  appendToDisplay('e');
}

// Include all your calculator functions here

function clearHistory() {
  document.getElementById('history').innerHTML = '';
}
