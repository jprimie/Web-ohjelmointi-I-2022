/*Tee puhelinluettelo.
Puhelinluetteloon lisäät taulukkoon objekteja (eli henkilöitä joilla nimi ja puhelinnumero).
Käyttäjältä kysytään henkilön nimi ja puhelinnumero.
Henkilön poisto -toimintoa ei tarvitse tässä versiossa olla.

Tee hakutoiminto jossa haet nimen perusteella puhelinnumeron.

Tee puhelinnumeron haku funktioksi.
Funktion parametrina on taulukko josta haetaan ja henkilön nimi.
Funktio palauttaa puhelinnumeron.
Kutsu funktiota.

Käyttöliittymän voit tehdä millaiseksi haluat (komentokehoite -pohjainen kuitenkin)
*/

class Henkilo {
  constructor(nimi, puhnro) {
    this.nimi = nimi;
    this.puhnro = puhnro;
  }
}
const puhelinluettelo = [];
puhelinluettelo.push(
  new Henkilo("Herra X", "01234567890"),
  new Henkilo("Herra Y", "0503890123")
);

let input = require("readline-sync");

puhelinluetteloApp();

function puhelinluetteloApp() {
  console.log("\nPuhelinluettelo\n");
  let valinta = input.question(
    "1. Lisaa henkilo \n2. Hae numeroa nimella\n0. Lopeta ohjelma\n\n"
  );
  while (true) {
    if (valinta == 1) {
      puhelinluettelo.push(
        new Henkilo(
          input.question("\nAnna nimi: "),
          input.question("Anna puhelinnumero: ")
        )
      );
      console.log("\nHenkilo ja puhelinnumero lisatty\n");
      valinta = null;
      puhelinluetteloApp();
    } else if (valinta == 2) {
      haeNumero(puhelinluettelo, input.question("\nAnna haettavan nimi: \n\n"));
      valinta = null;
      puhelinluetteloApp();
    } else if (valinta == 0) {
      console.log("\nOhjema suljetaan\n");
      valinta = null;
      break;
    }
    break;
  }
}

function haeNumero(taulukko, hakuNimi) {
  let loytyi = false;
  taulukko.forEach((element) => {
    if (element.nimi === hakuNimi) {
      console.log("\nHaetun numero on: " + element.puhnro + "\n");
      loytyi = true;
    }
  });
  if (!loytyi) {
    console.log("\nHaetulla nimella ei loytynyt yhtaan tulosta.\n");
  }
}
