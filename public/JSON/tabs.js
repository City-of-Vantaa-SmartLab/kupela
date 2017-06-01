import Ilmoittajatiedot from '../components/tehtPage/tabsComponents/tehtava/Ilmoittajatiedot';
import Asiakkaidentiedot from '../components/tehtPage/tabsComponents/tehtava/Asiakkaidentiedot';
import Rakennuksentiedot from '../components/tehtPage/tabsComponents/tehtava/Rakennuksentiedot';
import Palonsijainti from '../components/tehtPage/tabsComponents/pohjapiirrokset/Palonsijainti';
import Saapuminen from '../components/tehtPage/tabsComponents/pohjapiirrokset/Saapuminen';
import Pelastussuunnitelma from '../components/tehtPage/tabsComponents/pohjapiirrokset/Pelastussuunnitelma';
import Vaarallisetaineet from '../components/tehtPage/tabsComponents/pohjapiirrokset/Vaarallisetaineet';
import Pohjapiirrokset from '../components/tehtPage/tabsComponents/pohjapiirrokset/Pohjapiirrokset';
import Jaetut from '../components/tehtPage/tabsComponents/someuutiset/Jaetut';
import Kuvat from '../components/tehtPage/tabsComponents/someuutiset/Kuvat';
import Uutiset from '../components/tehtPage/tabsComponents/someuutiset/Uutiset';
import Tekstit from '../components/tehtPage/tabsComponents/someuutiset/Tekstit';

const tabs = [
    {
        id: 1,
        name: "Tehtävä",
        nameId: "tehtava",
        components: [
            {
                name: "Ilmoittajatiedot",
                component: Ilmoittajatiedot,
            },
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
            },
            {
                name: "Rakennuksentiedot",
                component: Rakennuksentiedot,
            }
        ]
    },
    {
        id: 2,
        name: "Pohjapiirrokset",
        nameId: "pohjapiirrokset",
        components: [
            {
                name: "Pohjapiirrokset",
                component: Pohjapiirrokset,
                routes: [
                    {
                        name: "Palon sijainti",
                        nameId: "palonsijainti",
                        component: Palonsijainti
                    },
                    {
                        name: "Saapuminen",
                        nameId: "saapuminen",
                        component: Saapuminen
                    },
                    {
                        name: "Pelastussuunnitelma",
                        nameId: "pelastussuunnitelma",
                        component: Pelastussuunnitelma
                    },
                    {
                        name: "Vaaralliset aineet",
                        nameId: "vaarallisetaineet",
                        component: Vaarallisetaineet
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Some ja uutiset",
        nameId: "someuutiset",
        components: [
            {
                name: "Tekstit",
                component: Tekstit,
            },
            {
                name: "Kuvat",
                component: Kuvat,
            },
            {
                name: "Uutiset",
                component: Uutiset
            },
            {
                name: "Jaetut",
                component: Jaetut
            }
        ]
    },
    {
        id: 4,
        name: "Kuvat ja videot",
        nameId: "kuvatvideot",
        components: [
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
            }
        ]
    },
    {
        id: 5,
        name: "Dokumentaatio",
        nameId: "dokumentaatio",
        components: [
            {
                name: "Ilmoittajatiedot",
                component: Ilmoittajatiedot,
            },
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
            },
            {
                name: "Rakennuksentiedot",
                component: Rakennuksentiedot,
            }
        ]
    }
];

export default tabs;