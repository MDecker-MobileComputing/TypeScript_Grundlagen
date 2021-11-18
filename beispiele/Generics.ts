
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

    public printInfo(): void {

      console.log(`\nDie Liste mit Namen "${this._nameDerListe}" hat ${this._elementeArray.length} Elemente.\n`);
    }

    
  }; // Ende der Klasse


/* *** Ab hier Verwendung der Klasse *** */

let zahlenListen = new MeineListe<number>("Liste mit Prinzahlen");
zahlenListen.hinzufuegen(3);
zahlenListen.hinzufuegen(5);
zahlenListen.hinzufuegen(7);
zahlenListen.hinzufuegen(11);

let stringListe = new MeineListe<string>("Liste mit Vornamen");
stringListe.hinzufuegen("Alice");
stringListe.hinzufuegen("Bob");
stringListe.hinzufuegen("Claire");

zahlenListen.printInfo();
stringListe.printInfo();
