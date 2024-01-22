/* INGREDIENTI (PER 14 CREPE DEL DIAMETRO DI 18 CM)
Uova (medie) 3
Farina 00 250 g
Latte intero 500 g
Burro 40 g
PER UNGERE LA CREPIERA
Burro q.b. */

let uovo = 3;
let farina = 250;
let latte = 500;
let burro = 40;

console.log(
  "Gli ingredienti per preparare le crepes sono: " +
    uovo +
    " uova, " +
    farina +
    " gr di farina " +
    latte +
    " gr di latte " +
    burro +
    " gr di burro."
);

let pesoUova = uovo * 25;

console.log("Il peso delle uova corrisponde a 25gr l'una, quindi per questa ricetta sarà " + pesoUova + " gr.");

let pesoCiotola = pesoUova + farina + latte + burro;

console.log(
  "Una volta uniti gli ingredienti in una ciotola, questa peserà " +
    pesoCiotola +
    " gr. Queste sono le misure per 14 crepes del diametro di 18cm. I grammi per ciascuna crepes sono " +
    pesoCiotola. / 14
);
