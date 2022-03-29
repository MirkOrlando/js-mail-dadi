/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */

/* definire la lista di email autorizzate */
const emailsList = [
  "hazem70@mailpremium.net",
  "gnuygnuy@hrysyu.com",
  "igra55555555@icenhl.com",
  "barrybird@eluvit.com",
  "moss64@kyverify.ga",
  "loliwy@burgas.vip",
];

//console.log(emailsList);

/* assegnando gli elementi del DOM a delle variabili in JS */
const formElement = document.querySelector("form");
const emailInputElement = document.getElementById("email");
const submitInputElement = document.getElementById("submit");
const resetInputElement = document.getElementById("reset");
let logged = false;

/* assegnare l'email inserita dall'utente alla variabile in JS */
formElement.addEventListener("submit", function (getEmail) {
  getEmail.preventDefault();
  submitInputElement.setAttribute("disabled", "disabled");
  const emailUser = emailInputElement.value;
  console.log(emailUser);

  /* verificare che l'email dell'utente sia presente 
  tra gli indirizzi email autorizzati */
  for (let i = 0; i < emailsList.length; i++) {
    const email = emailsList[i];
    console.log(email);
    if (emailUser === email) {
      logged = true;
    }
    console.log(logged);
  }

  if (logged === true) {
    alert("Accesso eseguito correttamento");
  } else {
    alert("Utente non riconosciuto, procedere prima alla registrazione");
  }
});

/* rendere funzionante il tasto reset */
formElement.addEventListener("submit", function (resetForm) {
  resetForm.preventDefault();
  submitInputElement.removeAttribute("disabled", "disabled");
  emailInputElement.value = "";
});

//console.log(userEmail);

/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
 */

const playElement = document.getElementById("play");

/* inizializzare le variabili dei numeri casuali */
const pcRandomNumContainer = document.querySelector(".pc_random_num_container");
const userRandomNumContainer = document.querySelector(
  ".user_random_num_container"
);

playElement.addEventListener("click", function () {
  const pcRandomNum = Math.ceil(Math.random() * 6);
  const userRandomNum = Math.ceil(Math.random() * 6);

  userRandomNumContainer.innerHTML = `<div class="fs_4">${userRandomNum}</div>`;

  pcRandomNumContainer.innerHTML = `<div class="fs_4">${pcRandomNum}</div>`;

  /* confrontare i numeri casuali e stabilire chi ha fatto il numero più alto */
  if (userRandomNum < pcRandomNum) {
    console.log("hai perso!");
  } else if (userRandomNum > pcRandomNum) {
    console.log("hai vinto!");
  } else {
    console.log("pari!");
  }

  /* comunicare il vincitore */
});
