import Ilmoittajatiedot from '../components/tehtPage/tabsComponents/tehtava/Ilmoittajatiedot';
import Asiakkaidentiedot from '../components/tehtPage/tabsComponents/tehtava/Asiakkaidentiedot';
import Rakennuksentiedot from '../components/tehtPage/tabsComponents/tehtava/Rakennuksentiedot';

const tabs = [
    {
        id: 1,
        name: "Tehtävä",
        nameId: "tehtava",
        components: [
            {
                name: "Ilmoittajatiedot",
                component: Ilmoittajatiedot,
                routes: []
            },
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
                routes: []
            },
            {
                name: "Rakennuksentiedot",
                component: Rakennuksentiedot,
                routes: []
            }
        ]
    },
    {
        id: 2,
        name: "Pohjapiirrustukset",
        nameId: "pohjapiirrustukset",
        components: [
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
                routes: [
                    {
                        name: "Asiakkaidentiedot",
                        component: Asiakkaidentiedot,
                    },
                    {
                        name: "Ilmoittajatiedot",
                        component: Ilmoittajatiedot
                    },
                    {
                        name: "Rakennuksentiedot",
                        component: Rakennuksentiedot
                    }
                ]
            },
            {
                name: "Rakennuksentiedot",
                component: Rakennuksentiedot,
                routes: []
            }
        ]
    },
    {
        id: 3,
        name: "Some ja uutiset",
        nameId: "someuutiset",
        components: [
            {
                name: "Ilmoittajatiedot",
                component: Ilmoittajatiedot,
                routes: []
            },
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
                routes: []
            },
            {
                name: "Rakennuksentiedot",
                component: Rakennuksentiedot,
                routes: []
            }
        ]
    },
    {
        id: 4,
        name: "Kuvat ja videot",
        nameId: "kuvatvideot",
        components: [
            {
                name: "Ilmoittajatiedot",
                component: Ilmoittajatiedot,
                routes: []
            },
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
                routes: []
            },
            {
                name: "Rakennuksentiedot",
                component: Rakennuksentiedot,
                routes: []
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
                routes: []
            },
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
                routes: []
            },
            {
                name: "Rakennuksentiedot",
                component: Rakennuksentiedot,
                routes: []
            }
        ]
    },
    {
        id: 6,
        name: "Adin piirrustukset",
        nameId: "adinpiirrustukset",
        components: [
            {
                name: "Ilmoittajatiedot",
                component: Ilmoittajatiedot,
                routes: []
            },
            {
                name: "Asiakkaidentiedot",
                component: Asiakkaidentiedot,
                routes: []
            },
            {
                name: "Rakennuksentiedot",
                component: Rakennuksentiedot,
                routes: []
            }
        ]
    }
];

export default tabs;