import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { logIn, signUp } from '../actions/auth';

import TextField from './TextField';
import Button from './Button';
import { boxShadows } from '../style';

class Auth extends React.Component {
    static propTypes = {
        type: PropTypes.string.isRequired
    };

    state = {
        username: '',
        email: '',
        password: '',
        error: null
    };

    onChange = e => {
        const { name, value } = e.target;
        e.target &&
            this.setState(() => ({
                [name]: value
            }));
    };

    onSubmit = e => {
        e.preventDefault();
        const { type, logIn, signUp } = this.props;
        const { username, email, password } = this.state;

        if (type === 'login') {
            logIn(username, password);
        } else {
            signUp(username, email, password);
        }
    };

    render = () => {
        const { type } = this.props;
        const { username, email, password, error } = this.state;
        const isLoggingIn = type === 'login';

        return (
            <Form>
                <Heading>{isLoggingIn ? 'Log In' : 'Sign Up'}</Heading>

                <TextField
                    name="username"
                    type="text"
                    value={username}
                    onChange={this.onChange}
                    placeholder="Enter Username"
                    style={{ marginBottom: '10px' }}
                />
                {!isLoggingIn && (
                    <TextField
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.onChange}
                        placeholder="Enter Email"
                        style={{ marginBottom: '10px' }}
                    />
                )}
                <TextField
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.onChange}
                    placeholder="Enter Password"
                    style={{ marginBottom: '16px' }}
                />
                <Button onClick={this.onSubmit}>Sign Up</Button>
            </Form>
        );
    };
}

export default connect(null, { logIn, signUp })(Auth);

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    box-shadow: ${boxShadows.dark};
`;

const Heading = styled.h2`
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`;
