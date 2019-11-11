import React from 'react';
import Login from './Login';

class LoginContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
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

    render() {
        console.log('state', this.state);
        const { email, password } = this.state;
        return <Login
            email={email}
            password={password}
            handleEmail={this.handleEmail}
            handlePassword={this.handlePassword}
        />
    }
}

export default LoginContainer;