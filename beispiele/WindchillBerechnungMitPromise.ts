
/*
 * Erklärung zu Promises (Callbacks, Executor): https://javascript.info/promise-basics
 * <br>
 *
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

/**
 * Simulierte Wartezeit, bis die Funktionen zum Holen von Temperatur bzw. Windgeschwindigkeit
 * das Ergebnis zurückgibt.
 */
const ZWEI_SEKUNDEN = 2;


class WetterProvider {

  /**
   * Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Lufttemperatur
   * am Ort des Nutzers zurückgibt.
   *
   * @return Promise mit Temperatur in Grad Celsius, löst immer auf 5° auf.
   */
  public async getTemperatur(): Promise<Number> {

    const temperaturObjekt = new Number(5);

    const promise = new Promise<Number>(function(resolveCallback, rejectCallback) {

        setTimeout(
            () => { resolveCallback( temperaturObjekt ) },
            ZWEI_SEKUNDEN * 1000
        );
    });

    return promise;
  }


  /**
   * Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Windgeschwindigkeit
   * am Ort des Nutzers zurückgibt.
   *
   * @return Promise mit Windgeschwindigkeit in km/h, Promise löst immer auf 15 km/h auf.
   */
  private async getWindgeschwindigkeit(): Promise<Number> {

    const geschwindigkeitsObjeit = new Number(15);

    let promise = new Promise<Number>(function(resolveCallback, rejectCallback) {

        setTimeout(
            () => { resolveCallback( geschwindigkeitsObjeit ) },
            ZWEI_SEKUNDEN * 1000
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
    console.log(`Temperatur: ${temperatur} Grad Celsius`);

    const windgeschwindigkeit = this.getWindgeschwindigkeit();
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

    //const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    //console.log(`Gefühlte Temperatur: ${temperatur} ° Celsius\n`);
  }


  /**
   * Berechnung der gefühlten Temperatur _mit_ `await` hintereinander.
   */
  public async gefuehlteTemperatur_2() {

    const temperatur = await this.getTemperatur();
    console.log(`Temperatur: ${temperatur} Grad Celsius`);

    const windgeschwindigkeit = await this.getWindgeschwindigkeit();
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

    const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    console.log(`Gefühlte Temperatur: ${gefuehlteTemp} Grad Celsius\n`);
  }


  /**
   * Berechnung der gefühlten Temperatur _mit_ `await` und `Promise.all()`, also
   * mit paralleler Ausführung; benötigt also weniger Zeit zur Ausführung.
   */
  public async gefuehlteTemperatur_3() {

    const promise1 = this.getTemperatur();
    const promise2 = this.getWindgeschwindigkeit();

    const [temperatur, windgeschwindigkeit] = await Promise.all([ promise1, promise2 ]);

    const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    console.log(`Gefühlte Temperatur: ${gefuehlteTemp} Grad Celsius\n`);
  }

}; // Ende class



console.log();

let wetterProvider = new WetterProvider();

//wetterProvider.gefuehlteTemperatur_1();

//wetterProvider.gefuehlteTemperatur_2();

wetterProvider.gefuehlteTemperatur_3();

console.log();

