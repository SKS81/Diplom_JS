function calcWeeks(birthday) {
  let today = new Date(); 
  let birthDate = new Date(birthday);
  let minInHor = 60;
  let horInDay = 24;
  let livedWeeks = Math.floor((today - birthDate) / 1000 / 60 / minInHor / horInDay / 7);
  return livedWeeks; 
}