import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const NewTodo = () => {
    return <Search
        placeholder="Enter new task"
        enterButton="Add"
        size="large"
    />
}

export default NewTodo;