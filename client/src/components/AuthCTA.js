import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';
import ButtonLink from './ButtonLink';
import { boxShadows } from '../style';

export default class AuthCTA extends React.Component {
    render = () => {
        return (
            <Container>
                <SignUpText>Consider Signing Up for full access!</SignUpText>
                <ButtonContainer>
                    <Link to="/signup">
                        <Button>Sign Up</Button>
                    </Link>
                </ButtonContainer>
                <LogInText>
                    Already have an account?{' '}
                    <Link to="/signup">
                        <ButtonLink paddingHorizontal="4px" size="normal">
                            Log In
                        </ButtonLink>
                    </Link>
                </LogInText>
            </Container>
        );
    };
}

const Container = styled.div`
    display: inline-flex;
    flex-direction: column;
    padding: 30px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: ${boxShadows.dark};
    /* background-color: green; */
`;

const ButtonContainer = styled.div`
    margin: 20px 0 10px;
`;

const SignUpText = styled.p`
    font-weight: bold;
`;
const LogInText = styled.p``;
