import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSize, colors } from '../style';

export default class ButtonLink_ extends React.Component {
    static propTypes = {
        color: PropTypes.string,
        hoverColor: PropTypes.string,
        paddingHorizontal: PropTypes.string,
        size: PropTypes.string, // small | normal
        style: PropTypes.object
    };

    render = () => {
        return (
            <ButtonLink role="button" {...this.props}>
                {this.props.children}
            </ButtonLink>
        );
    };
}

const ButtonLink = styled.div`
    display: inline-block;
    font-size: ${p => fontSize[p.size]};
    font-weight: bold;
    border-radius: 6px;
    padding: 11px ${p => p.paddingHorizontal || '14px'};
    background-color: transparent;
    color: ${p => p.color || colors.primary};

    &:hover {
        color: ${p => p.hoverColor || colors.primaryDarker};
        text-decoration: underline;
        cursor: pointer;
    }

    &:active {
        text-decoration: none;
    }
`;
