import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getGenresWithArtists } from '../actions/genre';

class GenresPage extends React.Component {
    componentDidMount = async () => {
        this.props.getGenresWithArtists();
    };

    render = () => {
        return <p>Genres Page</p>;
    };
}

export default connect(null, { getGenresWithArtists })(GenresPage);
