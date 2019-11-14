import React from 'react';
import TodoList from './TodoList';

class TodoListContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <TodoList />
    }
}

export default TodoListContainer;