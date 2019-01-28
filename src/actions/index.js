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

export const counterremove = (index) => ({
    type: types.COUNTERREMOVE,
    index
});

export const create = (title) => ({
    type: types.CREATE,
    title
});

export const modify = (index, title) => ({
    type: types.MODIFY,
    index,
    title
});