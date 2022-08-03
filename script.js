const lastOutput = document.querySelector('.last-output');
const currentOutput = document.querySelector('.current-output');
const buttons = document.querySelectorAll('button');

function calculate() {
    let text = this.innerText;

    if(text === 'AC') {
        lastOutput.innerText = '';
        currentOutput.innerText = '';
        return;
    }

    if(text === 'DEL') {
        currentOutput.innerText = currentOutput.innerText.slice(0, -1);
        return;
    }

    if(text === '='){
        lastOutput.innerText = currentOutput.innerText;
        currentOutput.innerText = eval(currentOutput.innerText);
        return;
    }

    else {
        currentOutput.innerText += text;
        return;
    }
}

buttons.forEach(key => {
    key.addEventListener('click', calculate);
});