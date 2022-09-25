const puhelinluettelo = [
  {
    nimi: "Matti Meikäläinen",
    puhnro: "0503890123",
  },
];
let input = require("readline-sync");

function puhelinluetteloApp() {
  console.log("Puhelinluettelo\n");
  let valinta = input.question(
    "1. Lisaa henkilo \n2. Hae numeroa nimella\n0. Lopeta ohjelma\n"
  );
  while (true) {
    if (valinta == 1) {
      let uusihenkilo = {
        nimi: input.question("Anna nimi: "),
        puhnro: input.question("Anna puhelinnumero: "),
      };
      puhelinluettelo.push(uusihenkilo);
      console.log("\nHenkilo ja puhelinnumero lisatty\n");
      console.table(puhelinluettelo);
      valinta = null;
      puhelinluetteloApp();
    } else if (valinta == 2) {
      console.log(haeNumero(puhelinluettelo));
      valinta = null;
      puhelinluetteloApp();
    } else if (valinta == 0) {
      console.log("\nOhjema suljetaan\n");
      false;
    }
  }
}

function haeNumero(taulukko) {
  let haettavaHenkilo = taulukko.find(
    (haettavaHenkilo) =>
      haettavaHenkilo.nimi === input.question("Anna haettavan nimi: ")
  );
  console.table(haettavaHenkilo);
}

puhelinluetteloApp();
