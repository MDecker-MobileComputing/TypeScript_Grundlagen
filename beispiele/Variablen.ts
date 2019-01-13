
/*
 * Beispiele für typisierte Variablen in TypeScript.
 * Siehe auch:
 * https://www.typescriptlang.org/docs/handbook/basic-types.html
 * 
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

 console.log();

let nachricht: String = "Hallo";
nachricht += " DHBW!";
console.log( nachricht );


let zahl: number = 42;
zahl += 1;
console.log(`\nZahl nach Inkrement: ${zahl}\n`);

// zahl = "hallo"; // Gibt Fehler beim Transpilieren
