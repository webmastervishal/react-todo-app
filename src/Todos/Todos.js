import React from 'react';

import NewTodo from './NewTodo/NewTodoContainer';
import TodoList from './TodoList/TodoList';

const Todos = () => {
    return <div style={{
        background: '#ECECEC', padding: '30px', width: '80%', margin: '100px auto'
    }}>
        <NewTodo />
        <TodoList />
    </div>
}

export default Todos;