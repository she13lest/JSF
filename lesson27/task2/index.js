const counterEl = document.querySelector('.counter')
const counterValueEl = document.querySelector('.counter__value')

function onCounterChange(event) {
    const isButton = event.target.classList.contains('counter__button')

    if (!isButton) {
        return;
    }

    const action = event.target.dataset.action;

    const oldValue = Number(counterValueEl.textContent)

    const newValue = action === 'decrease'
        ? oldValue - 1
        : oldValue + 1;
    
    localStorage.setItem('counterValue', newValue)

    counterValueEl.textContent = newValue
}

counterEl.addEventListener('click', onCounterChange)

function onStorageChange(event) {
    counterValueEl.textContent = event.newValue;
} 

window.addEventListener('storage', onStorageChange);

function onDocumentLoaded() {
    counterValueEl.textContent = localStorage.getItem('counterValue') || 0;
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded)
