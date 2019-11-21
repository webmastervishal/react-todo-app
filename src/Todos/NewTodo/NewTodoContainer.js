import React from 'react';
import NewTodo from './NewTodo';
import actions from './../Action';
import { connect } from 'react-redux';

class NewTodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo : ''
        }
    }

    newTodo = (e) => {
        this.props.addTodo({id: this.props.user.id, title : this.state.todo});
    }

    handleOnChange = (e) => {
        this.setState({todo: e.target.value});
    }

    render() {
        return <NewTodo 
            todo = {this.state.todo}
            newTodo = {this.newTodo}
            handleOnChange = {this.handleOnChange}
        />
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    addTodo: actions.addTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoContainer);