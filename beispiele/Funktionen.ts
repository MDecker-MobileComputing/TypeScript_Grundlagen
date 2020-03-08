
/*
 * Beispiele für typisierte Funktionen in TypeScript.
 * Siehe auch:
 * http://www.typescriptlang.org/docs/handbook/functions.html
 * 
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


function addieren(x: number, y: number): number {

    return x + y;
}

function ausgabe(str: string): void {

    console.log( str );
}


console.log();

let summe = addieren( 2, 3);
console.log(`summe: ${summe}`);

ausgabe("Lorem Ipsum");

console.log();