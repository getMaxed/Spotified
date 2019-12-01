import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSize, colors } from '../style';

export default class Button_ extends React.Component {
    static propTypes = {
        onClick: PropTypes.func,
        style: PropTypes.object
    };

    render = () => {
        return <Button {...this.props}>{this.props.children}</Button>;
    };
}

const Button = styled.button`
    font-size: ${fontSize.small};
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 11px 14px;
    background-color: ${colors.primary};
    color: ${colors.white};

    &:hover {
        background-color: ${colors.primaryDarker};
        cursor: pointer;
    }

    &:active {
        background-color: ${colors.white};
        color: ${colors.primaryDarker};
    }
`;
