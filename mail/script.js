// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Crea una lista di email di invitati ad una festa.
const inviti = ["erika@example.it", "andrea@example.it", "francesca@example.it", "luca@example.it",];
// Chiedi all’utente la sua email
const email = prompt ("Inserire email");
// controlla che sia nella lista di chi può accedere.
for (let i=0; i<inviti.length; i++) {
    if (inviti [i]===email) {
        accesso=true;
    }
}
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.ù
if (accesso=true) {
    console.log("Benvenuto");
} else {
    console.log("Accesso negato");
}