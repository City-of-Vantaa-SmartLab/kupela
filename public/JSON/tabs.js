import Ilmoittajatiedot from '../components/tehtPage/tabsComponents/tehtava/Ilmoittajatiedot';
import Asiakkaidentiedot from '../components/tehtPage/tabsComponents/tehtava/Asiakkaidentiedot';
import Rakennuksentiedot from '../components/tehtPage/tabsComponents/tehtava/Rakennuksentiedot';
import GraphicsInfo from '../components/tehtPage/tabsComponents/tehtava/GraphicsInfo';
import Kohdetiedot from '../components/tehtPage/tabsComponents/tehtava/Kohdetiedot';
import KohdeIlmakuva from '../components/tehtPage/tabsComponents/tehtava/KohdeIlmakuva';
import Kohdeyhteystiedot from '../components/tehtPage/tabsComponents/tehtava/Kohdeyhteystiedot';
import Kohdesaapuminen from '../components/tehtPage/tabsComponents/tehtava/Kohdesaapuminen';
import Kohdekortti from '../components/tehtPage/tabsComponents/tehtava/Kohdekortti';
import Tehtava from '../components/tehtPage/tabsComponents/layouts/Tehtava';

import Palonsijainti from '../components/tehtPage/tabsComponents/pohjapiirrokset/Palonsijainti';
import Saapuminen from '../components/tehtPage/tabsComponents/pohjapiirrokset/Saapuminen';
import Pelastussuunnitelma from '../components/tehtPage/tabsComponents/pohjapiirrokset/Pelastussuunnitelma';
import Vaarallisetaineet from '../components/tehtPage/tabsComponents/pohjapiirrokset/Vaarallisetaineet';
import Pohjapiirrokset from '../components/tehtPage/tabsComponents/layouts/Pohjapiirrokset';

import Jaetut from '../components/tehtPage/tabsComponents/someuutiset/Jaetut';
import Kuvat from '../components/tehtPage/tabsComponents/someuutiset/kuvat';
import Uutiset from '../components/tehtPage/tabsComponents/someuutiset/Uutiset';
import Tekstit from '../components/tehtPage/tabsComponents/someuutiset/Tekstit';
import SomeUutiset from '../components/tehtPage/tabsComponents/layouts/SomeUutiset';

import Kolmiulotteinenkartta from '../components/tehtPage/tabsComponents/reusables/Kolmiulotteisetkartat';
import StreetView from '../components/tehtPage/tabsComponents/kuvatvideot/StreetView';
import Tieliikennekamerat from '../components/tehtPage/tabsComponents/kuvatvideot/Tieliikennekamerat';
import Valvontakamerat from '../components/tehtPage/tabsComponents/kuvatvideot/Valvontakamerat';
import KuvatVideot from '../components/tehtPage/tabsComponents/layouts/KuvatVideot';

import Tilannepaivakirja from '../components/tehtPage/tabsComponents/dokumentaatio/Tilannepaivakirja';
import Lisatiedot from '../components/tehtPage/tabsComponents/dokumentaatio/Lisatiedot';
import DokuKuvat from '../components/tehtPage/tabsComponents/dokumentaatio/Kuvat';
import Dokumentaatio from '../components/tehtPage/tabsComponents/layouts/Dokumentaatio';

import Ilmakuva from '../components/tehtPage/tabsComponents/reusables/Ilmakuva';
import Yhteystiedot from '../components/tehtPage/tabsComponents/reusables/Yhteystiedot';
import Pohjapiirros from '../components/tehtPage/tabsComponents/reusables/Pohjapiirros';
import Turvallisuushenkilosto from '../components/tehtPage/tabsComponents/reusables/Turvallisuushenkilosto';
import ItemContainer from '../components/tehtPage/tabsComponents/reusables/ItemContainer';
import VaarallisetItemContainer from '../components/tehtPage/tabsComponents/reusables/VaarallisetItemContainer';
import Pelastus from '../components/tehtPage/tabsComponents/reusables/Pelastus';
import Savunleviaminen from '../components/tehtPage/tabsComponents/reusables/Savunleviaminen';
import Kemikaalikortti from '../components/tehtPage/tabsComponents/reusables/Kemikaalikortti';
import Escape from '../components/tehtPage/tabsComponents/reusables/Escape';
import Luetteloaineista from '../components/tehtPage/tabsComponents/reusables/Luetteloaineista';
import Sprinklerit from '../components/tehtPage/tabsComponents/reusables/Sprinklerit';
import Kokoontumispaikka from '../components/tehtPage/tabsComponents/reusables/Kokoontumispaikka';
import Palovaroittimet from '../components/tehtPage/tabsComponents/reusables/Palovaroittimet';
import Kartta from '../components/tehtPage/tabsComponents/reusables/Kartta';
import PohjaStreetView from '../components/tehtPage/tabsComponents/reusables/PohjaStreetView';
import VaarallisetPohjapiirros from '../components/tehtPage/tabsComponents/reusables/VaarallisetPohjapiirros';

const tabs = [
    {
        id: 1,
        name: 'Tehtävä',
        type: 'tab',
        nameId: 'tehtava',
        components: [
            {
                name: 'tehtava',
                type: 'layout',
                component: Tehtava,
                routes: [
                    {
                        name: 'Ilmoittajatiedot',
                        nameId: 'ilmoittajatiedot',
                        component: Ilmoittajatiedot,
                    },
                    {
                        name: 'Asiakkaidentiedot',
                        nameId: 'asiakkaidentiedot',
                        component: Asiakkaidentiedot,
                    },
                    {
                        name: 'GraphicsInfo',
                        nameId: 'graphicsinfo',
                        component: GraphicsInfo
                    },
                    {
                        name: 'Rakennuksentiedot',
                        nameId: 'rakennuksentiedot',
                        component: Rakennuksentiedot,
                    },
                    {
                        name: 'Kohdetiedot',
                        nameId: 'kohdetiedot',
                        component: Kohdetiedot,
                        components: [
                            {
                                name: 'Saapuminen',
                                nameId: 'saapuminen',
                                component: Kohdesaapuminen
                            },
                            {
                                name: 'Kohdekortti',
                                nameId: 'kohdekortti',
                                component: Kohdekortti
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Kohteen tiedot',
        type: 'tab',
        nameId: 'pohjapiirrokset',
        components: [
            {
                name: 'pohjapiirrokset',
                type: 'layout',
                component: Pohjapiirrokset,
                routes: [
                    {
                        name: 'Rakennus',
                        type: 'subtab',
                        nameId: 'palonsijainti',
                        component: Palonsijainti,
                        routes: [
                            {
                                name: 'Kerrokset',
                                nameId: 'sprinklerit',
                                component: Sprinklerit
                            }
                        ]
                    },
                    {
                        name: 'Ympäristö',
                        type: 'subtab',
                        nameId: 'saapuminen',
                        component: Saapuminen,
                        routes: [
                            {
                                name: 'Kartta',
                                nameId: 'kartta',
                                component: Kartta
                            },
                            {
                                name: 'Street view',
                                nameId: 'pohjastreetview',
                                component: PohjaStreetView
                            },
                            {
                                name: 'Ilmakuva',
                                nameId: 'ilmakuva',
                                component: Ilmakuva
                            }
                        ]
                    },
                    {
                        name: 'Dokumentit',
                        type: 'subtab',
                        nameId: 'vaarallisetaineet',
                        component: Vaarallisetaineet,
                        routes: [
                            {
                                name: 'Vaarallisetaineettab',
                                nameId: 'vaarallisetaineettab',
                                component: VaarallisetItemContainer
                            },
                            {
                                name: 'Kemikaalikortti',
                                nameId: 'Kemikaalikortit',
                                component: Kemikaalikortti
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Some ja uutiset',
        type: 'tab',
        nameId: 'someuutiset',
        components: [
            {
                name: 'someuutiset',
                type: 'layout',
                component: SomeUutiset,
                routes: [
                    {
                        name: 'Tekstit',
                        nameId: 'tekstit',
                        component: Tekstit
                    },
                    {
                        name: 'Kuvat',
                        nameId: 'kuvat',
                        component: Kuvat,
                    },
                    {
                        name: 'Uutiset',
                        nameId: 'uutiset',
                        component: Uutiset,
                    },
                    {
                        name: 'Jaetut',
                        nameId: 'jaetut',
                        component: Jaetut
                    }
                ]
            }
        ]
    },
    /*{
        id: 4,
        name: 'Kuvat ja videot',
        type: 'tab',
        nameId: 'kuvatvideot',
        components: [
            {
                name: 'kuvatvideot',
                type: 'layout',
                component: KuvatVideot,
                routes: [
                    {
                        name: 'Street View',
                        nameId: 'streetview',
                        component: StreetView,
                    },
                    {
                        name: 'Valvontakamerat',
                        nameId: 'valvontakamerat',
                        component: Valvontakamerat
                    },
                    {
                        name: 'Tieliikennekamerat',
                        nameId: 'tieliikennekamerat',
                        component: Tieliikennekamerat
                    },
                    {
                        name: '3D-kartat',
                        nameId: '3dkartat',
                        component: Kolmiulotteinenkartta
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Dokumentaatio',
        type: 'tab',
        nameId: 'dokumentaatio',
        components: [
            {
                name: 'dokumentaatio',
                type: 'layout',
                component: Dokumentaatio,
                routes: [
                    {
                        name: 'Lisätiedot',
                        nameId: 'lisatiedot',
                        component: Lisatiedot
                    },
                    {
                        name: 'Tilannepäiväkirja',
                        nameId: 'tilannepaivakirja',
                        component: Tilannepaivakirja
                    },
                    {
                        name: 'DokuKuvat',
                        nameId: 'dokukuvat',
                        component: DokuKuvat
                    }
                ]
            }
        ]
    }*/
];

export default tabs;
