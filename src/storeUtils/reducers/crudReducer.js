import * as actionTypes from '../actions/actionType';

let initialState = {
}

export default function (state = initialState, action) {
    let newState = {};

    switch (action.type) {

        case actionTypes.ENTITY_FETCH:
            newState = Object.assign({}, state);
            newState[action.entity] = action.data;

            return newState;
        default:
            return state
    }
}
