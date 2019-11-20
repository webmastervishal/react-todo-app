import React from 'react';
import {connect} from 'react-redux';
import Cookie from 'js-cookie';
import Login from './Login';
import actions from './Action';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        if(Cookie.get('token'))
            this.props.history.push('/dashboard');
    }

    componentWillUpdate() {
        if(Cookie.get('token'))
            this.props.history.push('/dashboard');
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin = (e) => {
        e.preventDefault();
        //we have call user login action

        this.props.userLogin(this.state.email);
    }

    render() {
        const { email, password } = this.state;
        return <Login
            email={email}
            password={password}
            handleEmail={this.handleEmail}
            handlePassword={this.handlePassword}
            handleLogin={this.handleLogin}
        />
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    userLogin : actions.userLogin
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);