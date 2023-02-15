const container = document.querySelector('.app-table__body-content');
const emptyDot = document.querySelector('.app-table__body-dot._empty');

for (let i = 0; i < 4680 - 4; i++) {
  const copy = emptyDot.cloneNode();
  container.appendChild(copy);
}