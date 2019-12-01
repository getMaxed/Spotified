import React from 'react';
import styled from 'styled-components';

import AuthCTA from './AuthCTA';

export default class UsersPage extends React.Component {
    render = () => {
        return (
            <>
                <AuthCTA />
                <p>Users Page</p>
            </>
        );
    };
}
