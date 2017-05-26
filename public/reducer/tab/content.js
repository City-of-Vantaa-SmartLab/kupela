import { SHOW_CURRENT_TABCONTENT } from './actions';

const initialState = {
    id: 1,
    name: "Tehtävä",
    nameId: "tehtava",
    componentDirectory: [
        "./tabsComponents/tehtava/Ilmoittajatiedot",
        "./tabsComponents/tehtava/Asiakkaidentiedot",
        "./tabsComponents/tehtava/Rakennuksentiedot",
    ],
    components: [
        "Ilmoittajatiedot",
        "Asiakkaidentiedot",
        "Rakennuksentiedot",
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CURRENT_TABCONTENT:
            return action.content;
        default:
            return state;
    }
};