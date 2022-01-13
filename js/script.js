console.log('JS OK');


/* Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).*/

//RECUPERO ELEMENTI FORM
const firstName = document.getElementById('name');
const distance = document.getElementById('km');
const age = document.getElementById('age');
const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');
const ticketSection = document.getElementById('ticket-section');
const formField = document.querySelectorAll('.form-field')

// RECUPERO ELEMENTI BIGLIETTO
const passengerName = document.getElementById('passengerName');
const offer = document.getElementById('offer');
const cargo = document.getElementById('cargo');
const cpCode = document.getElementById('cpCode');
const ticketPrice = document.getElementById('ticketPrice');

let nameValue;
let distanceValue;
let ageValue;

// EVENTO CLICK A GENERATEBUTTON
generateButton.addEventListener('click', function(){
    // RECUPERO I VALORI
    nameValue = firstName.value;
    distanceValue = distance.value;
    ageValue = age.value;

    // CALCOLO PREZZO BSE
    let price = 0.21 * distanceValue;
    let discountOffer = 'Tariffa Ordinaria';
    
    // CALCOLO PREZZO CON SCONTI
    if (age.value === 'minor') {
        price *= 0.60;
        discountOffer = 'Tariffa Minorenni';
    } else if (age.value === 'over') {
        price *= 0.80;
        discountOffer = 'Tariffa Senior';
    }
    console.log(price);

    // RANDOMIZZO CODICE CP
    let cpRnd = Math.floor(Math.random() * (100000 - 90000) + 90000);
    console.log(cpRnd);

    // RANDOMIZZO CARGO
    let cargoRnd = Math.floor(Math.random() * 12) +1;
    console.log(cargoRnd);

    // METTO I VALORI NEL TICKET
    passengerName.innerHTML = nameValue;
    ticketPrice.innerHTML = price.toFixed(2);
    offer.innerHTML = discountOffer;
    cpCode.innerHTML = cpRnd;
    cargo.innerHTML = cargoRnd;

    ticketSection.classList.remove('d-none')

})

resetButton.addEventListener('click', function(){
})