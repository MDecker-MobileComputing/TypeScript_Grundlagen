
 /*
  * Beispiel für eine Klasse in TypeScript.
  * siehe auch: https://www.typescriptlang.org/docs/handbook/classes.html
  *
  * This file is licensed under the terms of the BSD 3-Clause License.
  */


class Begruessung {

    /*
     * Wenn das Argument mit einem Schutzmodizierer versehen ist (hier: private),
     * dann wird automatisch eine Member-Variablen mit entsprechendem Typ angelegt.
     */
    constructor( private _name: string ) {
    }

    /*
     * Gibt String mit Begrüßungstext zurück.
     */
    public getBegruessung(): string {

        return "\nHallo " + this._name + "!\n";
    }

    public addieren(x: number, y: number): number {

      return x + y;
    }

    public addieren2 = (x: number, y: number) => {

      return x + y;
    }

}; // Ende der Klasse


/* *** Ab hier Verwendung der Klasse *** */

let objekt1 = new Begruessung( "Alice" );
let objekt2 = new Begruessung( "Bob"   );

console.log( objekt1.getBegruessung() );
console.log( objekt2.getBegruessung() );

console.log( objekt1.addieren2( 2, 3 ) );
