import React from 'react';
import { Icon } from 'antd';

const Todo = (props) => {
    return <div className="todo">
        <p >{props.title}</p>
        <Icon type="close" />
    </div>
}

export default Todo;