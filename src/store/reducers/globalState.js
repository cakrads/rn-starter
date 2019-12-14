import * as TYPES from './../actions/type';
import initialState from './state';

const globalState = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_DEFAULT:
            return initialState;
    }
    return state
}

export default globalState;