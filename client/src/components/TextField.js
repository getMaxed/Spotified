import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../style';

export default class TextField_ extends React.Component {
    static propTypes = {
        label: PropTypes.string
    };

    render = () => {
        return <TextField {...this.props} />;
    };
}

const TextField = styled.input`
    height: 34px;
    outline: none;
    border: none;
    border: 1px solid ${colors.grey};
    border-radius: 6px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 14px;
    padding-left: 7px;
`;
