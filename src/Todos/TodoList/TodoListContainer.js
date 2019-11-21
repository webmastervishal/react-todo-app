import React from 'react';
import {connect} from 'react-redux';

import actions from './../Action';
import TodoList from './TodoList';

class TodoListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.fetchTodos(props.user.id);
    }

    handleMarkCompleted = (id) => {
        this.props.markCompleted(id);
    }
    render() {
        return <TodoList 
            todos = {this.props.todos}
            handleMarkCompleted = {this.handleMarkCompleted}
        />
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    fetchTodos: actions.fetchTodos,
    markCompleted : actions.markCompleted
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);