
import {FETCH_ITEMS,ADD_ITEM} from './actiontypes';
import {INITIAL_STATE} from '../constants/initialstate.constant';

export const fetchItems = () => dispatch => {
    
    dispatch({type: FETCH_ITEMS, payload: INITIAL_STATE.list})
}

export const addItem = (data) => dispatch => {
    
    dispatch({type: ADD_ITEM, payload: data})
}
