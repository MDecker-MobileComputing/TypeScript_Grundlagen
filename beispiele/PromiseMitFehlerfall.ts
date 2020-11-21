
/*
 * Erklärung zu Promises (Callbacks, Executor): https://javascript.info/promise-basics
 * <br>
 *
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

/**
 * Funktion liefert in 30% der Aufrufe einen Fehler zurück. In Abhängigkeit von einem
 * Zufallsgenerator wird entweder: 
 * * ein Promise-Objekt zurückgeliefert, bei dem nach einer Sekunde die Callback-Methode 
 *   für den Erfolgsfall aufgerufen wird (die Temperatur ist dann immer 5°).
 * * ein Promise-Objekt zurückgeliefert, bei dem nach einer halben Sekunden die Callback-Methode
 *   für den Fehlerfall aufgerufen wird.
 */
function getTemperatur(): Promise<Number> {

  const zufallszahl = Math.random(); // Zufallszahl zwischen 0.0 und 1.0 erzeugen.

  let promise = null;

  if (zufallszahl <= 0.3) {

    const temperaturObjekt = new Number(5);

    promise = new Promise<Number>(function(resolveCallback, rejectCallback) {
  
        setTimeout(
            function() { resolveCallback( temperaturObjekt ); },
            1000
        );
    });
  
  } else {

    promise = new Promise<Number>(function(resolveCallback, rejectCallback) {
  
        setTimeout(
            function() { rejectCallback( "Verbindung zu Server mit Wetterdaten fehlgeschlagen." ); },
            500
        );
    });

  }

  return promise;
}


// **********************************************************************************************************************************

console.log();

const temperaturPromise = getTemperatur();
temperaturPromise.then( function(temperaturResolved) {

  console.log(`Temperatur: ${temperaturResolved} Grad Celsius`);

}).catch( function(fehlerObjekt) {

  console.log(`Fehler aufgetreten: ${fehlerObjekt}`);

});

console.log();

