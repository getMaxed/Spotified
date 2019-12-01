import React from 'react';
import styled from 'styled-components';

import AuthCTA from './AuthCTA';

export default class ArtistsPage extends React.Component {
    render = () => {
        return (
            <>
                <AuthCTA />
                <p>Artists Page</p>
            </>
        );
    };
}
