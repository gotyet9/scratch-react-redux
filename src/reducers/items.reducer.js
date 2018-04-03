import {FETCH_ITEMS} from "../actions/actiontypes";
import {INITIAL_STATE} from '../constants/initialstate.constant';

export default function (state = [], action) {
    debugger
    switch (action.type) {
        case FETCH_ITEMS:
            return action.payload;
        default:
            return INITIAL_STATE;
    }
}
