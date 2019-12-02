import React from 'react';
import styled from 'styled-components';
import Auth from './Auth';

export default class SignUpPage extends React.Component {
    render = () => {
        return (
            <Container>
                <Auth type="login" />
            </Container>
        );
    };
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 56px;
`;
