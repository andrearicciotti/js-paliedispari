const userNumber = parseInt(prompt("Benvenuto! Scegli un numero da 1 a 5!"));
console.log(userNumber);
let userChoice;

if (userNumber < 1 || userNumber > 5) {

    alert("Per favore scegli un numero da 1 a 5!");
    location.reload();

} else if (isNaN(userNumber)) {

    alert("Hai inserito una parola, per favore scegli un numero da 1 a 5! ");
    location.reload();

} else {

    userChoice = prompt('Ora punta su "pari" o "dispari"!');

    if (userChoice !== "pari" && userChoice !== "dispari") {

        alert('Per favore scegli "pari" o "dispari"');
        location.reload();
        
    }
}



const pageElem = document.querySelector(".container");
const resultElem = document.createElement("h2");
let comRandom;
let result;



randomNr();


const sum = userNumber + comRandom;


oddOrEven(`${userChoice}`, `${sum}`);


// console.log(userNumber, userChoice, comRandom, sum, result);

if (result === 'Hai vinto!') {

    resultElem.innerHTML = `il Computer ha generato il numero ${comRandom}, la somma e' ${sum} e hai scelto ${userChoice} per cui ${result}`;

} else {

    resultElem.innerHTML = `il Computer ha generato il numero ${comRandom}, la somma e' ${sum} e hai scelto ${userChoice} per cui ${result}`;

}

pageElem.append(resultElem);




/**
 * Description
 * @param {any} userChoice
 * @param {any} sum
 * @returns {any}
 */
function oddOrEven(userChoice, sum) {

    let type;

    if (sum % 2 === 0) {
        type = "pari";
    } else {
        type = "dispari";
    }

    if (type === userChoice) {
        result = "Hai vinto!";
    } else {
        result = "Hai perso!";
    }

    return result;

}


/**
 * Description
 * @returns {any}
 */
function randomNr() {
    comRandom = Math.floor(Math.random() * 5) + 1;

    return comRandom;
}
