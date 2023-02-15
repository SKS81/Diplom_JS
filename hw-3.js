let dots = document.getElementsByClassName("app-table__body-dot");

function emptyDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('_young');
    dots[i].classList.remove('_adult');
    dots[i].classList.remove('_senior');
    dots[i].classList.add('_empty');
  }
}