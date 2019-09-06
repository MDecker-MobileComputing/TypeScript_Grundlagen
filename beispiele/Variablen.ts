
/*
 * Beispiele für typisierte Variablen in TypeScript.
 * Siehe auch:
 * https://www.typescriptlang.org/docs/handbook/basic-types.html
 * 
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


console.log();

let nachricht: string = "Hallo";
nachricht += " DHBW!";
console.log( nachricht );


let zahl: number = 42;
zahl += 1;
console.log(`\nZahl nach Inkrement: ${zahl}\n`);

// zahl = "hallo"; // Gibt Fehler beim Transpilieren


// Mit Typ "any" wird die Typ-Prüfung quasi abgeschaltet
let irgendwas : any = 42;
irgendwas = "Hallo Any!";
console.log( irgendwas + "\n" );

