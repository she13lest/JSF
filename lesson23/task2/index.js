const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
};

const getLinesSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      seatNumber => `
            <div
                class="sector__seat"
                data-seat-number="${seatNumber}"
            ></div >
    `
    )
    .join('');

const getSectorLines = () => {
  const seatsString = getLinesSeats();

  return generateNumbersRange(1, 10)
    .map(
      lineNumber => `
            <div
                class="sector__line"
                data-line-number="${lineNumber}"
            >${seatsString}</div >
    `
    )
    .join('');
};

const arenaEl = document.querySelector('.arena');

const renderArena = () => {
  const linesString = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
            <div
                class="sector"
                data-sector-number="${sectorNumber}"
            >${linesString}</div >
    `
    )
    .join('');

  arenaEl.innerHTML = sectorsString;
};

const onSeatSelected = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatEl = document.querySelector('.board__selected-seat');
  selectedSeatEl.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaEl.addEventListener('click', onSeatSelected);

renderArena();
