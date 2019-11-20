import actions from './Action';

const initialState = [];

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.STORE_TODO:
            return state;
        case actions.STORE_TODOS:
            return state;
        case actions.UPDATE_TODO:
            return state;
        default:
            return state;
    }
}

export default Reducer;