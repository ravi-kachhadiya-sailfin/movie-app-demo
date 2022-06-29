import { combineReducers } from 'redux';
import componentReducer from './componentReducer';

// Import custom components
import crudReducer from './crudReducer';

const rootReducer = combineReducers({
    crud: crudReducer,
    component: componentReducer
});

export default rootReducer;