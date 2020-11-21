
/*
 *
 * Erklärung zu Promises: https://javascript.info/promise-basics
 *
 *
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

/**
 * Simulierte Wartezeit, bis eine der Funktionen zum Holen von Temperatur bzw. Windgeschwindigkeit
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

        setTimeout( () => { resolveCallback( temperaturObjekt ) },
                    ZWEI_SEKUNDEN * 1000
        );
    });

    return promise;
  }


  /**
   * Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Windgeschwindigkeit
   * am Ort des Nutzers zurückgibt.
   *
   * @return Promise mit Windgeschwindigkeit in km/h, Promise löst immer auf 12 km/h auf.
   */
  private async getWindgeschwindigkeit(): Promise<Number> {

    const geschwindigkeitsObjeit = new Number(12);

    let promise = new Promise<Number>(function(resolveCallback, rejectCallback) {

        setTimeout( () => { resolveCallback( geschwindigkeitsObjeit ) },
                    ZWEI_SEKUNDEN * 1000
        );
    });

    return promise;
  }


  /**
   * Eigentliche Berechnung der gefühlten Temperatur.<br>
   *
   * Erklärung Windchill-Formel:
   * * https://www.welt.de/wissenschaft/article112099898/Wie-jeder-seine-gefuehlte-Temperatur-ausrechnen-kann.html
   * * https://de.wikipedia.org/wiki/Windchill
   *
   * @param temperatur  Physikalische Lufttemperatur in Grad Celsius
   *
   * @param windgeschwindigkeit  Windgeschwindigkeit in km/h
   */
  private berechneGefuehlteTemperatur(temperatur: Number, windgeschwindigkeit: Number) : Number {

    const v_a = temperatur.valueOf();
    const v   = Math.pow(windgeschwindigkeit.valueOf(), 0.16);

    return 13.12 + 0.6215*v_a + (0.3965*v_a - 11.37) * v;
  }


  /**
   * Berechnung der gefühlten Temperatur OHNE await.
   */
  public gefuehlteTemperatur_1() {

    const temperatur = wetterProvider.getTemperatur();
    console.log(`Temperatur: ${temperatur} ° Celsius`);

    const windgeschwindigkeit = wetterProvider.getWindgeschwindigkeit();
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

    //const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    //console.log(`Gefühlte Temperatur: ${temperatur} ° Celsius\n`);
  }


  /**
   * Berechnung der gefühlten Temperatur MIT await.
   */
  public async gefuehlteTemperatur_2() {

    const temperatur = await wetterProvider.getTemperatur();
    console.log(`Temperatur: ${temperatur} ° Celsius`);

    const windgeschwindigkeit = await wetterProvider.getWindgeschwindigkeit();
    console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

    const gefuehlteTemp = this.berechneGefuehlteTemperatur(temperatur, windgeschwindigkeit);
    console.log(`Gefühlte Temperatur: ${temperatur} ° Celsius\n`);
  }


}; // Ende class



console.log();

let wetterProvider = new WetterProvider();

wetterProvider.gefuehlteTemperatur_1();

wetterProvider.gefuehlteTemperatur_2();

console.log();

