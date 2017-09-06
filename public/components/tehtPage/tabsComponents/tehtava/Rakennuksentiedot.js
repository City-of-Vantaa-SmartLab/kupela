import React from 'react';
import { connect } from 'react-redux';

const Rakennuksentiedot = ({}) =>
    <div className="rakennuksentiedot">
      <div className="scrollableArea">
        <h2>Rakennuksen tiedot:</h2>
        <img src="../../../../resources/images/variafront.jpg"/>
        <p>Osoite: Ojahaantie 5, 01600 Vantaa</p>
        <p>Rakennusten lukumäärä: 2</p>
        <p>Kerrosten lukumäärä: 1-2</p>
        <p>Pinta-ala: 13 080m2</p>
        <p>Väestönsuojat: 1, Pohjoispääty, varasto. 2. Keskiosa, varasto. 3. Eteläpääty, bändin harjoitustila.</p>
        <p>Kokoontumispaikka: Pysäköintialueen reuna Louhelantien läheisyydessä</p>
        <p>Paloilmoitinlaite: Pääoven tuulikaappi</p>
        <p>Palokellot: On</p>
        <p>Kameravalvonta: On</p>
        <p>Koneellinen ilmastointi: On</p>
        <p>Ilmastoinnin konehuone: 4kpl, kattotasanteella, käynti sisältä</p>
        <p>Savunpoiston laukaisukeskus: Pääoven tuulikaappi</p>
        <p>Veden pääsulku: Pohjakerros, lämmönjakohuone</p>
        <p>Sähköpääkeskus: Pohjakerros, pääoven alapuolella</p>
        <p>Lämpökeskus: Pohjakerros, pääoven alapuolella</p>
        <p>Pelastuslaitoksen reittiavain: Ojahaantien puolella pääoven viereisellä seinustalla</p>
        <p>Kaasupullojen varastointi: Ulkona, 2. rakennuksen pääty</p>
      </div>
    </div>;

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(Rakennuksentiedot);
