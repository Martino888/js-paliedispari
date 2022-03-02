// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt('inserisci una parola')


if(isPlalindrom(parola)){
    console.log('Plalindroma')
}else{
    console.log('non palindroma')
}


function isPlalindrom(parola) {
    let reversedWord = ''
    for(let i = 0; i < parola.length; i++){
        reversedWord = parola[i] + reversedWord;
        console.log(parola)
    }
    
}














// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

