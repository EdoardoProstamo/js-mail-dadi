// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// generare primo numero
const userNumber = Math.ceil(Math.random() * 6);
const cpuNumber = Math.ceil(Math.random() * 6);
//Bonus
// const userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 6'));

const isNumberValid = userNumber >= 1 && userNumber <= 6 && !isNaN(userNumber); //Validatore numeri

if (isNumberValid) {
    if (userNumber>cpuNumber) {
    console.log(`User, vince con il punteggio di ${userNumber} vs ${cpuNumber}`);
} else if (cpuNumber>userNumber) {
    console.log(`Cpu vince, con il punteggio di ${cpuNumber} vs ${userNumber}`);
} else {
    console.log(`Pareggio, con il punteggio di ${cpuNumber} vs ${userNumber}`);
}
} else {
    console.log('Numero non valido');
}
console.log(isNumberValid);



//Math floor
// const userNumber = Math.floor(Math.random() * 6) + 1; arrotonda per difetto

//Math round
// const userNumber = Math.round(Math.random() * 5) + 1; arrotonda per eccesso