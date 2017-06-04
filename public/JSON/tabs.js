import Ilmoittajatiedot from '../components/tehtPage/tabsComponents/tehtava/Ilmoittajatiedot';
import Asiakkaidentiedot from '../components/tehtPage/tabsComponents/tehtava/Asiakkaidentiedot';
import Rakennuksentiedot from '../components/tehtPage/tabsComponents/tehtava/Rakennuksentiedot';
import GraphicsInfo from '../components/tehtPage/tabsComponents/tehtava/GraphicsInfo';
import Kohdetiedot from '../components/tehtPage/tabsComponents/tehtava/Kohdetiedot';
import Tehtava from '../components/tehtPage/tabsComponents/layouts/Tehtava';

import Palonsijainti from '../components/tehtPage/tabsComponents/pohjapiirrokset/Palonsijainti';
import Saapuminen from '../components/tehtPage/tabsComponents/pohjapiirrokset/Saapuminen';
import Pelastussuunnitelma from '../components/tehtPage/tabsComponents/pohjapiirrokset/Pelastussuunnitelma';
import Vaarallisetaineet from '../components/tehtPage/tabsComponents/pohjapiirrokset/Vaarallisetaineet';
import Pohjapiirrokset from '../components/tehtPage/tabsComponents/layouts/Pohjapiirrokset';

import Jaetut from '../components/tehtPage/tabsComponents/someuutiset/Jaetut';
import Kuvat from '../components/tehtPage/tabsComponents/someuutiset/Kuvat';
import Uutiset from '../components/tehtPage/tabsComponents/someuutiset/Uutiset';
import Tekstit from '../components/tehtPage/tabsComponents/someuutiset/Tekstit';
import SomeUutiset from '../components/tehtPage/tabsComponents/layouts/SomeUutiset';

import Kartat from '../components/tehtPage/tabsComponents/reusables/Kartat';
import StreetView from '../components/tehtPage/tabsComponents/reusables/StreetView';
import Tieliikennekamerat from '../components/tehtPage/tabsComponents/kuvatvideot/Tieliikennekamerat';
import Valvontakamerat from '../components/tehtPage/tabsComponents/kuvatvideot/Valvontakamerat';
import KuvatVideot from '../components/tehtPage/tabsComponents/layouts/KuvatVideot';

import Tilannepaivakirja from '../components/tehtPage/tabsComponents/dokumentaatio/Tilannepaivakirja';
import Lisatiedot from '../components/tehtPage/tabsComponents/dokumentaatio/Lisatiedot';
import DokuKuvat from '../components/tehtPage/tabsComponents/dokumentaatio/Kuvat';
import Dokumentaatio from '../components/tehtPage/tabsComponents/layouts/Dokumentaatio';

import Ilmakuva from '../components/tehtPage/tabsComponents/reusables/Ilmakuva';

const tabs = [
    {
        id: 1,
        name: "Tehtävä",
        type: "tab",
        nameId: "tehtava",
        components: [
            {
                name: "Tehtävä",
                type: "layout",
                component: Tehtava,
                routes: [
                    {
                        name: "GraphicsInfo",
                        nameId: "graphicsinfo",
                        component: GraphicsInfo
                    },
                    {
                        name: "Ilmoittajatiedot",
                        nameId: "ilmoittajatiedot",
                        component: Ilmoittajatiedot,
                    },
                    {
                        name: "Asiakkaidentiedot",
                        nameId: "asiakkaidentiedot",
                        component: Asiakkaidentiedot,
                    },
                    {
                        name: "Rakennuksentiedot",
                        nameId: "rakennuksentiedot",
                        component: Rakennuksentiedot,
                    },
                    {
                        name: "Kohdetiedot",
                        nameId: "kohdetiedot",
                        component: Kohdetiedot,
                        components: [
                            {
                                name: "Ilmakuva",
                                nameId: "ilmakuva",
                                component: Ilmakuva
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Pohjapiirrokset",
        type: "tab",
        nameId: "pohjapiirrokset",
        components: [
            {
                name: "Pohjapiirrokset",
                type: "layout",
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
        type: "tab",
        nameId: "someuutiset",
        components: [
            {
                name: "SomeUutiset",
                type: "layout",
                component: SomeUutiset,
                routes: [
                    {
                        name: "Tekstit",
                        nameId: "tekstit",
                        component: Tekstit
                    },
                    {
                        name: "Kuvat",
                        nameId: "kuvat",
                        component: Kuvat
                    },
                    {
                        name: "Uutiset",
                        nameId: "uutiset",
                        component: Uutiset
                    },
                    {
                        name: "Jaetut",
                        nameId: "jaetut",
                        component: Jaetut
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Kuvat ja videot",
        type: "tab",
        nameId: "kuvatvideot",
        components: [
            {
                name: "KuvatVideot",
                type: "layout",
                component: KuvatVideot,
                routes: [
                    {
                        name: "Street View",
                        nameId: "streetview",
                        component: StreetView,
                    },
                    {
                        name: "Valvontakamerat",
                        nameId: "valvontakamerat",
                        component: Valvontakamerat
                    },
                    {
                        name: "Tieliikennekamerat",
                        nameId: "tieliikennekamerat",
                        component: Tieliikennekamerat
                    },
                    {
                        name: "3D-kartat",
                        nameId: "3dkartat",
                        component: Kartat
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Dokumentaatio",
        type: "tab",
        nameId: "dokumentaatio",
        components: [
            {
                name: "Dokumentaatio",
                type: "layout",
                component: Dokumentaatio,
                routes: [
                    {
                        name: "Lisätiedot",
                        nameId: "lisatiedot",
                        component: Lisatiedot
                    },
                    {
                        name: "Tilannepäiväkirja",
                        nameId: "tilannepaivakirja",
                        component: Tilannepaivakirja
                    },
                    {
                        name: "DokuKuvat",
                        nameId: "dokukuvat",
                        component: DokuKuvat
                    }
                ]
            }
        ]
    }
];

export default tabs;