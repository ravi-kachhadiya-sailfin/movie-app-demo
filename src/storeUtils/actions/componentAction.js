import * as commonAction from './commonActions';

export function loader(data) {
    return function (dispatch) {
        dispatch(commonAction.loader("loader", data));
    };
}