import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../style';

export default class Textarea_ extends React.Component {
    static propTypes = {
        width: PropTypes.string,
        rows: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        width: '85%',
        rows: '8'
    };

    render = () => {
        return <Textarea spellCheck="false" {...this.props} />;
    };
}

const Textarea = styled.textarea`
    border: 1px solid ${colors.grey};
    width: 85%;
    border-radius: 6px;
`;
