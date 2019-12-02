import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGenresWithArtists } from '../actions/genre';
import { postFeedback } from '../actions/feedback';

import AuthCTA from './AuthCTA';
import FeedbackRequest from './FeedbackRequest';
import { colors } from '../style';

class GenresPage extends React.Component {
    componentDidMount = async () => {
        // this.props.getGenresWithArtists();
    };

    render = () => {
        const { postFeedback } = this.props;

        return (
            <Container>
                <AuthCTA style={{ marginTop: '56px' }} />
                <p
                    style={{
                        margin: '167px 0',
                        padding: '20px',
                        border: `1px solid ${colors.primary}`
                    }}>
                    <span style={{ color: 'red', textDecoration: 'underline' }}>
                        Artists
                    </span>{' '}
                    Page
                </p>
                <FeedbackRequest type="artists" postFeedback={postFeedback} />
            </Container>
        );
    };
}

export default connect(null, { getGenresWithArtists, postFeedback })(
    GenresPage
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
