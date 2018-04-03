import {FETCH_ITEMS,ADD_ITEM} from "../actions/actiontypes";
import {INITIAL_STATE} from '../constants/initialstate.constant';

export default function (state = [], action) {
    
    switch (action.type) {
        case FETCH_ITEMS:
            return Object.assign({}, state, { list: action.payload });
        case ADD_ITEM:
            return { 
                ...state,
                list: [...state.list, action.payload]
            }
        default:
            return INITIAL_STATE;
    }
}
