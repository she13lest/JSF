const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

function listOfTarget(text, color) {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;"> ${text}</span>`;
}

const divTargetGrey = listOfTarget.bind(null, 'div', 'grey');
const divTargetGreen = listOfTarget.bind(null, 'div', 'green');
const pTargetGrey = listOfTarget.bind(null, 'p', 'grey');
const pTargetGreen = listOfTarget.bind(null, 'p', 'green');
const spanTargetGrey = listOfTarget.bind(null, 'span', 'grey');
const spanTargetGreen = listOfTarget.bind(null, 'span', 'green');

function attachHandlers() {
  divElem.addEventListener('click', divTargetGreen);
  divElem.addEventListener('click', divTargetGrey, true);
  pElem.addEventListener('click', pTargetGreen);
  pElem.addEventListener('click', pTargetGrey, true);
  spanElem.addEventListener('click', spanTargetGreen);
  spanElem.addEventListener('click', spanTargetGrey, true);
}
attachHandlers();

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  eventsListElem.innerHTML = '';
});

const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
attachHandlersBtn.addEventListener('click', () => attachHandlers());

const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
removeHandlersBtn.addEventListener('click', () => {
  divElem.removeEventListener('click', divTargetGreen);
  divElem.removeEventListener('click', divTargetGrey, true);
  pElem.removeEventListener('click', pTargetGreen);
  pElem.removeEventListener('click', pTargetGrey, true);
  spanElem.removeEventListener('click', spanTargetGreen);
  spanElem.removeEventListener('click', spanTargetGrey, true);
});
