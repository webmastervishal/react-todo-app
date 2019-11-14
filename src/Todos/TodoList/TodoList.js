import React from 'react';
import Todo from './../Todo';

const TodoList = () => {
    return <div className="todolist">
        <Todo title="Learn React" />
        <Todo title="Learn Javascript" />
        <Todo title="Learn Node JS" />
    </div>
}

export default TodoList;