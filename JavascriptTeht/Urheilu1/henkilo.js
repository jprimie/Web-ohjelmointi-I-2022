class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, syntymavuosi, sukunimi, kutsumanimi);
    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
  setEtunimet(etunimet) {
    super.etunimet = etunimet;
  }
  get getEtunimet() {
    return this.etunimet;
  }
  setSukunimi(sukunimi) {
    super.sukunimi = sukunimi;
  }
  get getSukunimi() {
    return this.sukunimi;
  }
  setKutsumanimi(kutsumanimi) {
    super.kutsumanimi = kutsumanimi;
  }
  get getKutsumanimi() {
    return this.kutsumanimi;
  }
  setSyntymavuosi(syntymavuosi) {
    super.syntymavuosi = syntymavuosi;
  }
  get getSyntymavuosi() {
    return this.syntymavuosi;
  }
}

const u1 = new Urheilija(
  "Valtteri Viktor",
  "Bottas",
  "Valtteri",
  1989,
  "https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.320.medium.jpg/1646819266274.jpg",
  69,
  "Formula 1",
  "67 palkintopalli sijoitusta, 10 kisa voittoa"
);
const u2 = new Urheilija(
  "Lando Kinder",
  "Norris",
  "Lando",
  1999,
  "https://www.formula1.com/content/fom-website/en/drivers/lando-norris/jcr:content/image.img.640.medium.jpg/1646819013197.jpg",
  68,
  "Formula 1",
  "6 palkintopalli sijoitusta, 2 kisa voittoa"
);
const u3 = new Urheilija(
  "Lewis Carl Davidson",
  "Hamilton",
  "Lewis",
  1985,
  "https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.320.medium.jpg/1647334259839.jpg",
  73,
  "Formula 1",
  "188 palkintopalli sijoitusta, 7 maailmanmestaruutta, 103 kisavoittoa, kaikkien aikojen menestynein F1 kuljettaja"
);

console.table(u1, u2, u3);
