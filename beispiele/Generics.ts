
 /*
  * Beispiel für eine generische Klasse in TypeScript.
  * siehe auch: https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes
  *
  * This file is licensed under the terms of the BSD 3-Clause License.
  */


 /**
  * Objekte der Klasse sind eine Liste von Elementen eines bestimmten Datentyps, der durch
  * den Typ-Parameter "ElementTyp" repräsentiert wird.
  * Die Liste hat zudem einen Namen von Typ String.
  */
class MeineListe<ElementTyp> {

    private _elementeArray: ElementTyp[] = [];

    constructor( private _nameDerListe: string ) {
    }

    public hinzufuegen(e: ElementTyp): void {

      this._elementeArray.push(e);
    }

    public ausgeben(): void {

      console.log(`Die Liste mit Namen "${this._nameDerListe}" hat ${this._elementeArray.length} Elemente:`);
      for (let i = 0; i < this._elementeArray.length; i++) {

        console.log(`  ${this._elementeArray[i]}`);
      }

      console.log();
    }

}; // Ende der Klasse

console.log();


/* *** Ab hier Verwendung der Klasse *** */

let zahlenListen = new MeineListe<number>("Primzahlen");

zahlenListen.hinzufuegen(3);
zahlenListen.hinzufuegen(5);
zahlenListen.hinzufuegen(7);
zahlenListen.hinzufuegen(11);
//zahlenListen.hinzufuegen("17"); // nicht zulässig
//zahlenListen.hinzufuegen(true); // nicht zulässig


let stringListe = new MeineListe<string>("Vornamen");

stringListe.hinzufuegen("Alice");
stringListe.hinzufuegen("Bob");
stringListe.hinzufuegen("Claire");

zahlenListen.ausgeben();
stringListe.ausgeben();
