import * as types from './ActionTypes';

export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const reset = (index) => ({
    type: types.RESET,
    index
});

export const create = () => ({
    type: types.CREATE
});

export const remove = () => ({
    type: types.REMOVE
});