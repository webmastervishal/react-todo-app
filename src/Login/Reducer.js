import actions from './Action';

const initialState = {};

const Reducer = (state = initialState, {type, payload} ) => {
    switch(type) {
        case actions.STORE_USER:
            return payload;
        default: 
            return state;
    }
}

export default Reducer;