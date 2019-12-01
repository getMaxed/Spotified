import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGenresWithArtists } from '../actions/genre';

import AuthCTA from './AuthCTA';
import FeedbackRequest from './FeedbackRequest';

class GenresPage extends React.Component {
    componentDidMount = async () => {
        this.props.getGenresWithArtists();
    };

    render = () => {
        return (
            <Container>
                <AuthCTA />
                <p>Genres Page</p>
                <FeedbackRequest />
            </Container>
        );
    };
}

export default connect(null, { getGenresWithArtists })(GenresPage);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
