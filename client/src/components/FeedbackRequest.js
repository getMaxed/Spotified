import React from 'react';
import styled from 'styled-components';

import ButtonLink from './ButtonLink';
import Textarea from './Textarea';
import { boxShadows } from '../style';

export default class Feedback_ extends React.Component {
    state = {
        value: ''
    };

    onChange = e => {
        const { value } = e.target;
        e.target &&
            this.setState(() => ({
                value
            }));
    };

    onSubmit = () => {
        const { type, postFeedback } = this.props;
        const { value } = this.state;

        postFeedback({ type, value });
        this.setState({
            value: ''
        });
    };

    render = () => {
        const { value } = this.state;

        return (
            <Container>
                <TextBold>We need your feedback!</TextBold>
                <Text>
                    Please let us know what genres are you interested in
                </Text>
                <Textarea
                    style={{ marginBottom: '4px' }}
                    onChange={this.onChange}
                    value={value}
                />
                <ButtonLink onClick={this.onSubmit}>Send</ButtonLink>
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
`;

const TextBold = styled.p`
    margin-bottom: 6px;
    font-weight: bold;
    text-decoration: underline;
`;

const Text = styled.p`
    margin-bottom: 20px;
`;
