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

/* richiedere all'utente il suo indirizzo email */
//const userEmail = prompt("inserisci il tuo indirizzo email");
//console.log(userEmail);
let logged = false;

/* verificare che l'email dell'utente sia presente 
tra gli indirizzi email autorizzati */
/* for (let i = 0; i < emailsList.length; i++) {
  const email = emailsList[i];
  console.log(email);
  if (userEmail === email) {
    logged = true;
  }
  console.log(logged);
}
 */
/* if (logged === true) {
  alert("Accesso eseguito correttamento");
} else {
  alert("Utente non riconosciuto, procedere prima alla registrazione");
}
 */
/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
 */

/* inizializzare le variabili dei numeri casuali */
const userRandomNum = Math.ceil(Math.random() * 6);
const pcRandomNum = Math.ceil(Math.random() * 6);
console.log(userRandomNum, pcRandomNum);
console.log(typeof userRandomNum, typeof pcRandomNum);

/* confrontare i numeri casuali e stabilire chi ha fatto il numero più alto */
if (userRandomNum < pcRandomNum) {
  console.log("hai perso!");
} else if (userRandomNum > pcRandomNum) {
  console.log("hai vinto!");
} else {
  console.log("pari!");
}

/* comunicare il vincitore */
