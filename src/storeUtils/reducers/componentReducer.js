import * as ActionTypes from '../actions/actionType';

const initialState = {
    loader: false
}

export default function (state = initialState, action) {
    let newState = {};

    switch (action.type) {

        case ActionTypes.LOADER:
            newState = Object.assign({}, state);
            newState[action.entity] = action.data;

            return newState;
        default:
            return state
    }
}