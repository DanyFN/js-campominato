// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all'utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// "vietato" o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l'utente ha inserito un numero
// consentito.
// BONUS: all'inizio il software richiede anche una difficoltà
// all'utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
// difficoltà 2=> da 1 a 50


// creo funzione diffocltà da 0 a 2
function sceltaLivelloDifficolta(){
//chiedere all utente un numero da 0 a 2
var livello = parseInt ( prompt( "inserisci una difficoltà da 0 a 2","0,1,2..."));
//validare inserimento
  while(isNaN(livello) || livello < 0 || livello > 2) {
    livello = parseInt ( prompt( "ERRORE, inserisci 0, 1, 2 ","0,1,2..."));
  }
  //ritornare scleta numeroutente
  console.log("l'utente ha scelto livello " + livello);
  return livello;
}
// richiamo la funzione
// sceltaLivelloDifficolta();

// creare funzione che setti le varie difficoltà (da 0 a 2)

function numeriMaxGame(livello) {
  var maxNumero = 0;
  switch (livello) {
    case 0: maxNumero = 100;
      break;
      case 1: maxNumero = 80;
      break;
      case 2: maxNumero = 50;
      break;
  }
  console.log("maxNumero selezionato è: " + maxNumero);
  return maxNumero;
}
// console.log( numeriMaxGame(sceltaLivelloDifficolta()) );

//creo funzione che ritorni quantità numeri e quantità bombe
function ritornoNumRandom(quantitaNum) {
  var arrayBombe = [];
  var i = 0;
  //ciclo per generare numeri random da pushare nell array vuoto
  while (arrayBombe.length < 16) {
    var numeroRandom = Math.floor(Math.random() * quantitaNum) + 1;
    //  controll0 che il numero generato random nn sia ripetuto
     if (!arrayBombe.includes(numeroRandom)) {
     arrayBombe.push(numeroRandom);
    }
    i++;
  }
  return arrayBombe;
}
var numeriMassimi = numeriMaxGame( sceltaLivelloDifficolta() );
var callArrayBombe = ritornoNumRandom(numeriMassimi);

console.log(callArrayBombe);

function game(listaBombe,numMax) {


  var count= 0;
  var possibilita = numMax - 16;
  while (count < possibilita) {
    var numeroInseritoUtente = parseInt( prompt("inserisci un numero da 1 a" + numMax));
    while ( isNaN(numeroInseritoUtente) || numeroInseritoUtente < 1 || numeroInseritoUtente > numMax) {
      numeroInseritoUtente = parseInt( prompt("ERRORE,inserisci un numero da 1 a" + numMax));
    }
    var arrayGameVuoto = [];
    if (!arrayGameVuoto.includes(numeroInseritoUtente) && !listaBombe.includes(numeroInseritoUtente) ) {
      arrayGameVuoto.push(numeroInseritoUtente);
      count++;
    }else if ( arrayGameVuoto.includes(numeroInseritoUtente) ) {
      alert("numero gia inserito");
    }else if ( listaBombe.includes(numeroInseritoUtente) ) {
      alert("HAI PERSO");
      document.writeln("SEI ESPLOSO,hai totalizzato " + count + " punto/i.");
      break;
    }else {
      document.writeln("HAI VINTO, hai totalizzato " + count + " punti");

    }
  }
}
game(callArrayBombe,numeriMassimi);
