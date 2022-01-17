export function createButton(buttonText) {
    const newButton = document.createElement('button')
    newButton.textContent = `<button>${buttonText}</button>`
    document.querySelector('body').append(newButton)
}
