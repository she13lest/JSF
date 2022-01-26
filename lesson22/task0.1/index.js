const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

function listOfTarget(text, color) {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;"> ${text}</span>`;
}

const divTargetGrey = listOfTarget.bind(null, 'div', 'grey');
const divTargetGreen = listOfTarget.bind(null, 'div', 'green');
const pTargetGrey = listOfTarget.bind(null, 'div', 'grey');
const pTargetGreen = listOfTarget.bind(null, 'div', 'green');
const spanTargetGrey = listOfTarget.bind(null, 'div', 'grey');
const spanTargetGreen = listOfTarget.bind(null, 'div', 'green');

function attachHandlers() {
  divElem.addEventListener('click', divTargetGrey, true);
  divElem.addEventListener('click', divTargetGreen);
  pElem.addEventListener('click', pTargetGrey, true);
  pElem.addEventListener('click', pTargetGreen);
  spanElem.addEventListener('click', spanTargetGrey, true);
  spanElem.addEventListener('click', spanTargetGreen);
}
attachHandlers();

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  eventsListElem.innerHTML = '';
});

const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
attachHandlersBtn.addEventListener('click', () => attachHandlers);

const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
removeHandlersBtn.addEventListener('click', () => {
  divElem.removeEventListener('click', divTargetGrey, true);
  divElem.removeEventListener('click', divTargetGreen);
  pElem.removeEventListener('click', pTargetGrey, true);
  pElem.removeEventListener('click', pTargetGreen);
  spanElem.removeEventListener('click', spanTargetGrey, true);
  spanElem.removeEventListener('click', spanTargetGreen);
});
