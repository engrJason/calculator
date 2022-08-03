const lastOutput = document.querySelector('.last-output');
const currentOutput = document.querySelector('.current-output');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const operationButton = document.querySelector('.operation');
const numberButton = document.querySelectorAll('.number');
const equalsButton = document.querySelector('.equals');

class Calculator {
    constructor(lastOutput, currentOutput) {
        this.lastOutput = lastOutput;
        this.currentOutput = currentOutput;
        this.clear();
    }

    updateDisplay() {
        this.currentOutput.innerText = this.currentValue;
        this.lastOutput.innerText = this.lastValue;
    }

    clear() {
        this.lastValue = '';
        this.currentValue = '';
    }

    delete() {
        this.currentValue = this.currentValue.slice(0, -1);
    }

    insertNumber(number) {
        this.currentValue += number.toString();
    }
}

const calculator = new Calculator(lastOutput, currentOutput) 

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.insertNumber(button.innerText);
        calculator.updateDisplay();
    })
});

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})
