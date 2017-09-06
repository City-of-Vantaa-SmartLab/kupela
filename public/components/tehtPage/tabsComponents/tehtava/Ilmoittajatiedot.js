import React from 'react';

const IlmoittajaTiedot = () =>
  <div className="ilmoittajatiedot">
    <div className="scrollableArea">
      <h2>Hätäkeskukseen ilmoitetut tiedot:</h2>
      <p>Hälytyksen tekijä: Jussi Linnossuo, lehtori</p>
      <p>Hälytyksen tekijän puhelin: 040 500 4275</p>
      <p>Hälytyksen osoite: Ojahaantie 5 (käynti Louhelantien puolelta)</p>
      <p>Kuvaus tilanteesta:</p>
      <p>Sähköosastolla on tapahtunut oppituntien aikana pieni räjähdys, joka aiheuttanut sähköpalon
        ja palovammoja yhdelle opiskelijalle. Sähköpalo ja lähellä oleva palokuorma aiheuttavaa voimakasta
        savunmuodostumista sekä osastolla että käytävän puolella.</p>
      <p>Jussi Linnossuo tehnyt hälytyksen ja soittanut kouluisännälle (Juha Alam, p.0400 760 471), joka varmistaa,
        että opiskelijat postuvat tiloista. Kouluisäntä on vastassa pelastajia paloilmoitinkeskuksella.</p>
    </div>
  </div>;

export default IlmoittajaTiedot;
