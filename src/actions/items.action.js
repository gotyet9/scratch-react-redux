
import {FETCH_ITEMS} from './actiontypes';
import {INITIAL_STATE} from '../constants/initialstate.constant';

export const fetchItems = () => dispatch => {
    debugger
    dispatch({type: FETCH_ITEMS, payload: INITIAL_STATE})
}
