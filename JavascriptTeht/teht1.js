/*
Tee sovellus, joka kysyy syötettävän sanan (merkkijono).
Sovellus testaa onko sana palindromi ts. sana on sama toisinpäin.
Esim. sana saippuakauppias on palindromi.
Luo ratkaisu siten että et käytä valmiita funktioita vaan teet oman algoritmin.

Muuta edellinen ratkaisu funktioksi joka palauttaa boolean arvon true, mikäli funktion parametrina oleva sana on palindromi (jos ei, niin palautetaan false).

Kutsu funktiota.
*/

function onkoPalindromi() {
  let input = require("readline-sync");
  let merkkijono = input.question("Anna merkkijono testattavaksi: ");
  if (merkkijono.length == 0) return false;
  const merkkijonoTaulukko = new Array();
  let eka;
  let vika;
  let puolivali = Math.ceil(merkkijono.length / 2);
  let index = 0;

  for (let i = 0; i < merkkijono.length; i++) {
    merkkijonoTaulukko.push(merkkijono.charAt(i));
  }

  while (merkkijonoTaulukko.length > puolivali) {
    vika = merkkijonoTaulukko.pop();
    eka = merkkijonoTaulukko[index];
    if (vika === eka) {
      index++;
    } else {
      return false;
    }
  }

  if (merkkijono.length % 2) {
    if (index + 1 == puolivali) {
      return true;
    } else return false;
  } else if (!(merkkijono % 2)) {
    if (index == puolivali) {
      return true;
    } else return false;
  }
}

if (onkoPalindromi()) {
  console.log("Sana on palindromi");
} else {
  console.log("Sana ei ole palindromi");
}
