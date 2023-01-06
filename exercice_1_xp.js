/****
 *  Exercise 1: Timer
 */

// Partie I

function showTwoSec() {
    alert("Hello World")
}

window.setTimeout(showTwoSec, 2000);


// Partie II
/***
 * Dans votre fichier Javascript, à l'aide de setTimeout, appelez une fonction après 2 secondes.
 * La fonction ajoutera un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">.
 */

function showTwoSecond() {

    //Creation des variable 

    let showDiv = document.getElementById("container")

    let createPara = document.createElement("p")

    let createContentP = document.createTextNode("Hello World")

    //Ajout des enfants
    createPara.appendChild(createContentP)

    
    showDiv.appendChild(createPara)


}

window.setTimeout(showTwoSecond, 2000);


/***
 * Partie III
 * Dans votre fichier Javascript, à l'aide de setInterval, appelez une fonction toutes les 2 secondes.
 * La fonction ajoutera un nouveau paragraphe <p>Hello World</p>au fichier <div id="container">.
 * L'intervalle sera effacé (c'est-à-dire clearInterval), lorsque l'utilisateur cliquera sur le bouton.
 * Au lieu de cliquer sur le bouton, l'intervalle sera effacé (c'est-à-dire clearInterval) dès qu'il y aura 5 paragraphes à l'intérieur du <div id="container">
 */

//window.setInterval(ShowFunctTwoSec, 2000);
/*
function ShowFunctTwoSec() {
    alert()
}
*/
let clearIntervalStop = setInterval(showTwoSecond, 2000);

let btn_clear = document.getElementById("clear")

btn_clear.addEventListener("click", clearIntervalfunction)

function clearIntervalfunction() {

    clearInterval(clearIntervalStop)

}

//question 5 à faire









