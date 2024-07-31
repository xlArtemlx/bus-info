import {combineReducers} from 'redux';

import busReducer from 'modules/Bus/redux';

const rootReducer = combineReducers({
    busReducer,
});

export default rootReducer;
