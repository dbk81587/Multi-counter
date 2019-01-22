import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            countNumber: 0
        }
    ]
};

function counter(state = initialState, action) {
    const {counters} = state;
    switch (action.type) {
       case types.CREATE:
            return {
                counters: [
                    ...counters, {
                        countNumber: 0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };
       case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index), {
                        countNumber: counters[action.index].countNumber + 1
                    },
                    ...counters.slice(action.index+1, counters.length)
                ]
            };
        case types.RESET:
            return {
                counters: [
                    ...counters.slice(0, action.index), {
                        countNumber: 0
                    },
                    ...counters.slice(action.index+1, counters.length)
                ]
            };
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index), {
                        countNumber: counters[action.index].countNumber - 1
                    },
                    ...counters.slice(action.index+1, counters.length)
                ]
            };
        default:
            return state;
    }
};

export default counter;