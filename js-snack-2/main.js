/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del 
primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const nomi = ['arianna', 'LUCIA', 'Marco']
const minuscolo = nomi.map((nome) => {
    return nome.toLowerCase()
})
console.log(minuscolo);

const maiuscola = minuscolo.map((maiusc)=> {
    return maiusc.charAt(0).toUpperCase() + maiusc.slice(1)
})
console.log(maiuscola);
