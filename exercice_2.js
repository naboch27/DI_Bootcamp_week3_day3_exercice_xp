/***
 * EXERCICE 3
 * Copiez le code ci-dessus dans un fichier HTML structuré.
 * Dans votre fichier Javascript, utilisez setIntervalpour déplacer le <div id="animate">vers la droite du
 *  <div id="container">, lorsque le bouton est cliqué.
 * Le <div id="animate">doit se déplacer 1pxvers la droite toutes les millisecondes, jusqu'à ce qu'il atteigne la fin du <div id="container">.
 * Astuce : utilisez clearInterval-la dès que la boîte atteint l'extrémité droite du conteneur
 * Astuce : regardez la démonstration dans le Course Noted nommé JS Functions
 */
/*
*/

//
const itemContainer = document.getElementById("container");

const itemAnimate = document.getElementById("animate");

//const btn_myMove = document.querySelector("button");

let gauche = 0

let i

function move() {

    gauche += 1

    itemAnimate.style.left = `${gauche}px`

    if (gauche >= itemContainer.offsetWidth - itemAnimate.offsetWidth) {

        clearInterval(i)
    }

}


function myMove() {
    
    i = setInterval(move, 1000)

}