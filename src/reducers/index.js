import {combineReducers} from 'redux';
import itemsReducer from './items.reducer';

export default combineReducers({
    //reducers to combine
    items: itemsReducer
});