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
const formLoginElement = document.getElementById("login");
const emailInputElement = document.getElementById("email");
const submitInputElement = document.getElementById("submit");
const resetInputElement = document.getElementById("reset");
const formSigninElement = document.getElementById("signin");
const emailNewInputElement = document.getElementById("new_email");
const submitNewInputElement = document.getElementById("submit_new");
const resetNewInputElement = document.getElementById("reset_new");
const loginElement = document.querySelector("login_btn");
const signinElement = document.getElementById("signin_btn");
const signinContainerElement = document.querySelector(".signin_container");
const LoginContainerElement = document.querySelector(".login_container");
let logged = false;
let registered = false;

/* signinElement.addEventListener("click", function () {
  signinContainerElement.classList.remove("d_none");
});
 */
/* inserire l'email inserita dall'utente nella lista delle email */
formSigninElement.addEventListener("submit", function (signEmail) {
  signEmail.preventDefault();
  submitNewInputElement.setAttribute("disabled", "disabled");
  let registered = false;
  const emailUser = emailNewInputElement.value;

  for (let i = 0; i < emailsList.length; i++) {
    const email = emailsList[i];
    if (emailUser === email) {
      registered = true;
    }
  }

  if (registered === false) {
    emailsList.push(emailUser);
    alert("email correttamente registrata");
  } else {
    alert("Utente gia registrato");
  }
});

/* rendere funzionante il tasto reset del form signin*/
formSigninElement.addEventListener("submit", function (resetFormSignin) {
  resetFormSignin.preventDefault();
  submitNewInputElement.removeAttribute("disabled", "disabled");
  emailNewInputElement.value = "";
});

/* assegnare l'email inserita dall'utente alla variabile in JS */
formLoginElement.addEventListener("submit", function (logEmail) {
  logEmail.preventDefault();
  submitInputElement.setAttribute("disabled", "disabled");
  const emailUser = emailInputElement.value;
  let logged = false;

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
formLoginElement.addEventListener("submit", function (resetForm) {
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
const resultGame = document.querySelector(".result");

playElement.addEventListener("click", function () {
  const pcRandomNum = Math.ceil(Math.random() * 6);
  const userRandomNum = Math.ceil(Math.random() * 6);

  userRandomNumContainer.innerHTML = `<div class="fs_4">${userRandomNum}</div>`;

  pcRandomNumContainer.innerHTML = `<div class="fs_4">${pcRandomNum}</div>`;

  /* confrontare i numeri casuali e stabilire chi ha fatto il numero più alto */
  /* comunicare il vincitore */
  if (userRandomNum < pcRandomNum) {
    resultGame.innerHTML = `<div class="result_content">Hai perso!</div>`;
  } else if (userRandomNum > pcRandomNum) {
    resultGame.innerHTML = `<div class="result_content">Hai vinto!</div>`;
  } else {
    resultGame.innerHTML = `<div class="result_content">Pari!</div>`;
  }
});
