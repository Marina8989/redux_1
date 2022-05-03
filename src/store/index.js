import {combineReducers, createStore} from 'readux';


const initialState = 1;

function counterReducer(state = initialState, action) {
    return state;
}

const reducers = combineReducers({
    counter: counterReducer
})

export const store =createStore(reducers);