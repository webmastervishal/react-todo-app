import React from 'react';
import { Icon } from 'antd';

const Todo = (props) => {
    return <div className="todo">
        {
            props.todo.completed ? <p 
                style={{textDecoration: 'line-through'}}
            >{props.todo.title}</p> : <p>{props.todo.title}</p>
        }
        
        <Icon type="close" 
            onClick={() => props.handleMarkCompleted(props.todo.id)}
        />
    </div>
}

export default Todo;