import * as actionTypes from './actionType';

export function fetch(entity, data) {
    return {
        type: actionTypes.ENTITY_FETCH,
        entity: entity,
        data: data
    }
}

export function loader(entity, data) {
    return {
        type: actionTypes.LOADER,
        entity: entity,
        data: data
    }
}