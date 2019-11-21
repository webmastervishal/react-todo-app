import actions from './Action';

const initialState = [];

const Reducer = (state = initialState, action) => {
    const todos = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case actions.STORE_TODO:
            todos.push(action.payload);
            return todos;
        case actions.STORE_TODOS:
            return action.payload;
        case actions.UPDATE_TODO:
            todos.find(todo => todo.id === action.payload).completed = true;
            return todos;
        default:
            return state;
    }
}

export default Reducer;