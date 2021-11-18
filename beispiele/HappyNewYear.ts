
/*
 * Code für Erklärung von Witz auf https://www.commitstrip.com/en/2014/12/31/happy-new-year/
 *
 * Alternativ kann man die Berechung auch mit dem Linux-Kommandozeilen-Programm "date" durchführen:
 * date --date @1420070400
 * 
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

 // Zeitstempel in Sekunden seit dem 1.1.1970, 0:00, UTC

 
const zahlAusComic = 1420070400;

let datum = new Date( 1420070400 * 1000 );

console.log( `\nDatum: ${datum}\n` );
