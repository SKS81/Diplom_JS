let retireAge;

function calcRetiredAge(isFemaleGender) {
  let retireAge;
  function calcRetiredAge(isFemaleGender) {
    if (isFemaleGender) {
        retireAge = 60;
    } else {
        retireAge = 65;
    }
  }
}

function colorizeDots(weeks) {
  let dots = document.getElementsByClassName("app-table__body-dot"); 
  emptyDots(); 
  for (let i = 0; i < weeks && i < dots.length; i++) {
    let colorClass;
    function colorizeDots(weeks) {
      let dots = document.getElementsByClassName("app-table__body-dot");
      emptyDots();
      for (let i = 0; i < weeks && i < dots.length; i++) {
        let colorClass;
        if (i < 18 * 52) {
          colorClass = '_young';
        } else if(i < retireAge * 52) {
          colorClass = '_adult';
        } else {
          colorClass = '_senior';
        }
        dots[i].classList.remove('_empty');
        dots[i].classList.add(colorClass);
      }
    }
    dots[i].classList.remove('_empty');
    dots[i].classList.add(colorClass);
  }
}