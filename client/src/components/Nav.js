import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { colors } from '../style';

export default class Nav_ extends React.Component {
    render = () => {
        return (
            <Nav>
                <LeftLinks>
                    <Link to="/genres">
                        <LinkTitle>Genres</LinkTitle>
                    </Link>
                    <Link to="/artists">
                        <LinkTitle>Artists</LinkTitle>
                    </Link>
                    <Link to="/users">
                        <LinkTitle>Users</LinkTitle>
                    </Link>
                </LeftLinks>
                <RightLinks>
                    <Link to="/login">
                        <LinkTitle right>Log In</LinkTitle>
                    </Link>
                    <Link to="/signup">
                        <LinkTitle right>Sign Up</LinkTitle>
                    </Link>
                </RightLinks>
            </Nav>
        );
    };
}

const Nav = styled.nav`
    height: 50px;
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-between;
`;

const LeftLinks = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

const RightLinks = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`;

const LinkTitle = styled.li`
    margin-left: ${p => (p.right ? '0' : '20px')};
    margin-right: ${p => (p.right ? '20px' : '0')};
    list-style: none;
    color: ${colors.white};

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;
