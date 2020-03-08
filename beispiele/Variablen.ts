
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

for (let i = 0; i < zahlenArray.length; i++) {

    console.log(`Zahl ${i+1}: ${zahlenArray[i]}`)
}

console.log();


// Tupel sind wie ein Array mit vorgegebener Länge, bei denen jedes Element einen eigenen Datentyp hat.
// Tupel können z.B. von Funktionen/Methoden verwendet werden, wenn mehrere  Werte auf einmal
// zurückzugeben sind.
let meinTupel : [ string, number, boolean ] = [ "Hallo", 123, false ];

console.log( `Wert 1 im Tupel: ${ meinTupel[0] } (string)`  );
console.log( `Wert 2 im Tupel: ${ meinTupel[1] } (number)`  );
console.log( `Wert 3 im Tupel: ${ meinTupel[2] } (boolean)` );


// Aufzählungs-Typen (Default-Werte: 0, 1, 2, ...)
enum FarbEnumTyp { ROT = 1, GELB = 2, BLAU = 3 };
let farbe1 : FarbEnumTyp = FarbEnumTyp.ROT,
    farbe2 : FarbEnumTyp = FarbEnumTyp.BLAU;
    
console.log();
console.log(`Erste  Farbe: ${ farbe1 }`);
console.log(`Zweite Farbe: ${ farbe2 }`);
console.log();


// Union-Type
let zahlOderString : string | number;
zahlOderString = "Hallo";
console.log(`\nzahlOderString=${ zahlOderString }`);
zahlOderString = 123;
console.log(`zahlOderString=${ zahlOderString }`);


console.log();