// PROGRAM LOGIC
const userWord = prompt("Ciao! Scrivi una parola per scoprire se e' palindroma!")
const pageElem = document.querySelector(".container");
const resultElem = document.createElement("h2");

// console.log(userWord.length);
let result
palindormTest(userWord);

// console.log(result);
if (result) {
    resultElem.innerHTML = `La parola ${userWord} e' palindroma!`
} else {
    resultElem.innerHTML = `La parola ${userWord} non e' palindroma!`
}

pageElem.append(resultElem);

// FUNCTIONS
/**
 * Description
 * @param {any} userWord
 * @returns {any} 
 */
function palindormTest(userWord) {

    let j = userWord.length;
    result = true;

    for (let i = 0; i < userWord.length; i++) {

        if (result) {

            const curLetter = userWord[i];
            // console.log(curLetter);
            j--;
            // console.log(j);

            while (j >= 0) {
                const revLetter = userWord[j];
                // console.log(revLetter);

                if (revLetter === curLetter) {

                    result = true;
                    break;

                } else {

                    result = false;
                    break;

                }
            }
        }
    }

    return result;
}

