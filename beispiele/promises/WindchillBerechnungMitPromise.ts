/*
 * Erklärung zu Promises (Callbacks, Executor): https://javascript.info/promise-basics
 * <br>
 *
 * This file is licensed under the terms of the BSD 3-Clause License.
 */


class WindchillTemperatur {

  /**
   * Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Lufttemperatur
   * am Ort des Nutzers zurückgibt.
   *
   * @return Promise mit Temperatur in Grad Celsius, löst nach einer Sekunde immer auf 5° auf.
   */
  public async getTemperatur(): Promise<Number> {

    const temperaturObjekt = new Number(5);

    const promise = new Promise<Number>(function(resolveCallback, rejectCallback) {

        setTimeout(
            function() { resolveCallback( temperaturObjekt ); },
            1000
        );
    });

    return promise;
  }

  /**
   * Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Windgeschwindigkeit
   * am Ort des Nutzers zurückgibt.
   *
   * @return Promise mit Windgeschwindigkeit in km/h, Promise löst nach einer Sekunde immer auf 15 km/h auf.
   */
  private async getWindgeschwindigkeit(): Promise<Number> {

    const geschwindigkeitsObjekt = new Number(15);

    let promise = new Promise<Number>(function(resolveCallback, rejectCallback) {

        setTimeout(
            function(){ resolveCallback( geschwindigkeitsObjekt ); },
            1000
        );
    });

    return promise;
  }

  /**
   * Eigentliche Berechnung der gefühlten Temperatur.<br>
   *
   * Für Erklärung der Windchill-Formel siehe:
   * * https://www.welt.de/wissenschaft/article112099898/Wie-jeder-seine-gefuehlte-Temperatur-ausrechnen-kann.html
   * * https://de.wikipedia.org/wiki/Windchill
   *
   * @param temperatur  Physikalische Lufttemperatur in Grad Celsius.
   *
   * @param windgeschwindigkeit  Windgeschwindigkeit in km/h.
   *
   * @return  Gefühlte Temperatur auf eine Nachkommastelle gerundet.
   */
  private berechneGefuehlteTemperatur(temperatur: Number, windgeschwindigkeit: Number) : Number {

    const v_a = temperatur.valueOf();
    const v   = Math.pow(windgeschwindigkeit.valueOf(), 0.16);

    const gefuehlteTemperatur =  13.12 + 0.6215*v_a + (0.3965*v_a - 11.37) * v;

    const gefuehlteTempraturGerundet = Math.round(gefuehlteTemperatur * 10) / 10;

    return gefuehlteTempraturGerundet;
  }

  /**
   * Berechnung der gefühlten Temperatur _ohne_ `await`: Syntaktisch nicht möglich,
   * weil die Promise-Objekte nicht aufgelöst werden..
   */
  public gefuehlteTemperatur_1() {

    const temperatur = this.getTemperatur();
    console.log(`\nTemperatur: ${temperatur} Grad Celsius`);

    const windgeschwindigkeit = this.getWindgeschwindigkeit();
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h\n`);

    //const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    //console.log(`=> Gefühlte Temperatur: ${temperatur} ° Celsius\n`);
  }

  /**
   * Berechnung der gefühlten Temperatur _mit_ `await` hintereinander.
   */
  public async gefuehlteTemperatur_2() {

    const temperatur = await this.getTemperatur();
    console.log(`\nTemperatur: ${temperatur} Grad Celsius`);

    const windgeschwindigkeit = await this.getWindgeschwindigkeit();
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

    const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    console.log(`=> Gefühlte Temperatur: ${gefuehlteTemp} Grad Celsius\n`);
  }

  /**
   * Berechnung der gefühlten Temperatur _mit_ `await` und `Promise.all()`, also
   * mit paralleler Ausführung; benötigt also weniger Zeit zur Ausführung.
   */
  public async gefuehlteTemperatur_3() {

    const promise1 = this.getTemperatur();
    const promise2 = this.getWindgeschwindigkeit();

    const [temperatur, windgeschwindigkeit] = await Promise.all([ promise1, promise2 ]);

    console.log(`\nTemperatur: ${temperatur} Grad Celsius`);
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

    const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    console.log(`=> Gefühlte Temperatur: ${gefuehlteTemp} Grad Celsius\n`);
  }

  /**
   * In dieser Methode wird nur die tatsächliche Temperatur abgefragt und angezeigt.
   * Statt dem Schlüsselwort `await` wird die Methode `then()` der Klasse `Promise` verwendet,
   * um zu warten, bis der Temperatur-Promise aufgelöst wurde.
   */
  public anzeigeTemperatur() {

    const temperaturPromise = this.getTemperatur();

    temperaturPromise.then( function(temperaturResolved) {

      console.log(`\nTemperatur: ${temperaturResolved} Grad Celsius\n`);
    });
  }

  /**
   * Beispiele für verkettete (chained) Aufrufe der in der Klasse `Promise` definierten `then()`-Methode.
   */
  public async anzeigeTemperaturUndWindgeschwindigkeit() {

    const temperaturPromise = this.getTemperatur();

    temperaturPromise.then( (temperaturResolved) => { // Arrow-Notation statt function(), damit "this" im Methodenrumpf erhalten bleibt

      console.log(`\nTemperatur: ${temperaturResolved} Grad Celsius\n`);

      const windgeschwindigkeitPromise = this.getWindgeschwindigkeit();

      return windgeschwindigkeitPromise;

    }).then( (windgeschwindigkeitResolved) => {

      console.log(`Windgeschwindigkeit: ${windgeschwindigkeitResolved} km/h\n`);
    });
  }

}; // Ende class


// **********************************************************************************************************************************


let wetterProvider = new WindchillTemperatur();

//wetterProvider.gefuehlteTemperatur_1();

//wetterProvider.gefuehlteTemperatur_2();

wetterProvider.gefuehlteTemperatur_3();

//wetterProvider.anzeigeTemperatur();

//wetterProvider.anzeigeTemperaturUndWindgeschwindigkeit();

