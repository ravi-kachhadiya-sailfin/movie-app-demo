import * as commonAction from './commonActions';
import { postData, getData, deleteData, putData } from '../httpUtil';

export function postAll(entity, data, entityName) {
    return function (dispatch) {
        return postData(entity, data).then((response) => {
            // console.log(response)
            dispatch(commonAction.fetch(entityName, response));
            dispatch(commonAction.loader("loader", false));
        })
    };
}

export function getAll(entity, entityName) {
    return function (dispatch) {
        return getData(entity).then((response) => {
            console.log(response.data);
            dispatch(commonAction.fetch(entityName, response));
            dispatch(commonAction.loader("loader", false));
        })
    };
}

export function deleteAll(entity, entityName) {
    return function (dispatch) {
        return deleteData(entity).then((response) => {
            // console.log(response.data)
            dispatch(commonAction.fetch(entityName, response));
        });
    }
}

export function putAll(entity, data, entityName) {
    //console.log(data);
    return function (dispatch) {
        return putData(entity, data).then((response) => {
            // console.log(response.data)
            dispatch(commonAction.fetch(entityName, response));
        });
    }
}