/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome 
e l’indicazione se può guidare, in base all’età.

*/

const people = [
    {
        nome: 'Arianna',
        cognome: 'Greco',
        eta: '29'
    },

    {
        nome: 'Martina',
        cognome: 'Greco',
        eta: '30'
    },

    {
        nome: 'Davide',
        cognome: 'Greco',
        eta: '5'
    },

    {
        nome: 'Luisa',
        cognome: 'Greco',
        eta: '13'
    },

    {
        nome: 'Marcello',
        cognome: 'Greco',
        eta: '56'
    },
]


const patente = people.map((person) => {
    if (person.eta < 18) {
        //console.log(`${person.nome} non puo guidare`);
        return (`${person.nome} non puo guidare`)
        
    } else {
        //console.log(`${person.nome} puo guidare`);
        return (`${person.nome} puo guidare`)
    }
});

console.log(patente);

