/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const automobili = [
    {
        marca: 'alfaromeo',
        modello: 'giulietta',
        alimentazione: 'benzina'
    },

    {
        marca: 'ferrari',
        modello: 'ferrari-F430',
        alimentazione: 'benzina'
    },

    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'diesel'
    },

    {
        marca: 'volkswagen',
        modello: 't-cross',
        alimentazione: 'diesel'
    },

    {
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'gpl'
    },

    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'gpl'
    },

    {
        marca: 'tesla',
        modello: 'model-s',
        alimentazione: 'elettrico'
    },

    {
        marca: 'toyota',
        modello: 'yaris',
        alimentazione: 'elettrico'
    },

    {
        marca: 'toyota',
        modello: 'corolla',
        alimentazione: 'metano'
    },

    {
        marca: 'fiat',
        modello: 'doblò',
        alimentazione: 'metano'
    },

];

//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.


 const benza = automobili.filter((auto) => auto.alimentazione == 'benzina');
 console.log(benza);

 const diesel = automobili.filter((auto) => auto.alimentazione == 'diesel');
 console.log(diesel);

 const altro = automobili.filter((auto) => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');
 console.log(altro);
