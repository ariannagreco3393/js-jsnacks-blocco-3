/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del 
primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const nomi = ['arianna', 'LUCIA', 'Marco']

const maiuscola = nomi.map((maiusc)=> {
    return maiusc.charAt().toUpperCase() + maiusc.slice(1).toLowerCase()
})
console.log(maiuscola);
