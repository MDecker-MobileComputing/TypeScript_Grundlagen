
/*
 *
 * Erklärung zu Promises: https://javascript.info/promise-basics
 *
 * Erklärung Windchill-Formel:
 * * https://www.welt.de/wissenschaft/article112099898/Wie-jeder-seine-gefuehlte-Temperatur-ausrechnen-kann.html
 * * https://de.wikipedia.org/wiki/Windchill
 *
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

 /** "npm install" ausführen */
//import {Promise} from 'es6-promise';

/* Wartezeit bis Funktion ein Ergebnis zurückgibt. */
const ZWEI_SEKUNDEN = 2;

class WetterProvider {

  /**
   * Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Temperatur
   * am Ort des Nutzers zurückgibt.
   *
   * @return Promise mit Temperatur in Grad Celsius, löst immer auf 5° auf.
   */
  public async getTemperatur() {

    let promise = new Promise(function(resolveCallback, rejectCallback) {

        setTimeout( () => { resolveCallback( 5 ) },
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
  public async getWindgeschwindigkeit() {

    let promise = new Promise(function(resolveCallback, rejectCallback) {

        setTimeout( () => { resolveCallback( 12 ) },
                    ZWEI_SEKUNDEN * 1000
        );
    });

    return promise;
  }


}; // Ende class



console.log();

let wetterProvider = new WetterProvider();

let windgeschwindigkeit = wetterProvider.getWindgeschwindigkeit();
console.log(`Windgeschwindigkeit: ${windgeschwindigkeit} km/h`);

let temperatur = wetterProvider.getTemperatur();
console.log(`Temperatur: ${temperatur} ° Celsius`);

console.log();

