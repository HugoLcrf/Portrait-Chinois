// Affichage Json ,pas reussit a le reliers avec l'animation j'aurais du faire un slider
//  document.addEventListener("DOMContentLoaded", function () {
//    fetch('data.json').then(function (response) {
//      response.json().then(function (data) {
//        data.forEach(function afficheAnalogie(resultat) {
//         document.querySelector('#listeanalogique').innerHTML += "<div class=\"carousel\" id=" + resultat.id + "><h2 class=\"carousel-item__subtitle\"><h2>" + resultat.analogie + "</h1>\"carousel-item__title\"<h1>je serais " + resultat.Valeuranalogie + "<p class=\"carousel-item__description\">" + resultat.Justify + <div class="carousel-item__image"></div> + resultat.img;
//        })
//      })
//    })
//  });

//PopUp Mentions Legales
document.querySelector('.volet-invisible').addEventListener('click', function (click) {
  //création du déroulement
  document.querySelector('.volet-invisible').animate([{ height: '12em' }], { duration: 800 })
  setTimeout(function () {
  }, 2);
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

    //injection d'une nouvelle analogie au html, générée par l'envoie (event)
    event.preventDefault();
    document.querySelector('#nouvelle-analogie').innerHTML +=
      '<div class=\"carousel\"' +
      '<div class="carousel-item__image"></div>' + document.querySelector("#imganalogie").value + "><h2 class=\"carousel-item__subtitle\"><h2>" + document.querySelector("#analogie").value + "</h1>\"carousel-item__title\"<h1>je serais " + document.querySelector("#valeurAnalogie").value + "<p class=\"carousel-item__description\">" + document.querySelector("#justify").value + '<div class="carousel-item__image"></div>' + document.querySelector("#analogie").value;
    //API, pour envoyer les données entrées dans le formulaire dans la base données de philippe gambette
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=hugo.lecerf&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeuranalogie").value + "Parce que " + document.querySelector("#araganalogie").value).then(function (response) {
      //génération du message d'erreur ou de succès
      response.json().then(function (data) {
        if (data.status == "success") {
          document.querySelector("#message").innerHTML = "Bien reçu! :)";
        } else {
          document.querySelector("#message").innerHTML = "Oops, erreur :(";
        }
      })
    })