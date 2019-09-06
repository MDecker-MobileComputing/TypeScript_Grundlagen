
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


// Array mit Zahlenwerden
let zahlenArray : number[] = [ 11, 22, 33 ];
console.log( `Anzahl Elemente in zahlenArray: ${ zahlenArray.length }` );


// Tupel sind wie Array, nur dass jedes Element einen speziellen Datentyp hat;
// Tupel können z.B. von Funktionen/Methoden verwendet werden, wenn mehrere
// Werte zusammen zurückzugeben sind.
let meinTupel : [ string, number, boolean ] = [ "Hallo", 123, false];

console.log(`\nWerte im Tupel: string=${ meinTupel[0] }, number=${ meinTupel[1] }, boolean=${ meinTupel[2] }`);
