// document.addEventListener("DOMContentLoaded", function () {
//         fetch('data.json').then(function (response) {
//             response.json().then(function (data) {
//                 data.forEach(function afficheAnalogie(resultat) {
//                   document.querySelector('.list-group').innerHTML += "<div class=\"item\" id="+ resultat.id + "><div class=\"item-text\"><h1>" + resultat.analogie + "</h1><p>je serais " + resultat.Valeuranalogie + "</p></div></div>";
//                 })
//             })
//         })
// });

    
    
const items = document.querySelectorAll('.item');

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)' });


  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)' });

};

items.forEach((item, i,) => {
  item.addEventListener('mouseenter', () => expand(item, i));
});



document.querySelector('.volet-invisible').addEventListener('click', function (click) {
  //création du déroulement
  document.querySelector('.volet-invisible').animate([{ height: '12em' }], { duration: 800 })
  setTimeout(function () {
  }, 2);
  //fixation du déroulement(le volet invisible devient 100% visible)
  setTimeout(function () {
      document.querySelector('.volet-invisible').classList.replace('volet-invisible', 'volet-visible')
          ;
  }, 800);
});

document.querySelector('.volet-invisible').addEventListener('click', function (click) {
  //cachée le volet
  document.querySelector('.volet-visible').animate([{ height: '3em' }], { duration: 800 })
  //fixation du déroulement(le volet visible devient 100% invisible)
  setTimeout(function () {
      document.querySelector('.volet-visible').classList.replace('volet-visible', 'volet-invisible')
          ;
  }, 800);
});
