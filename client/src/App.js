import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import store from './store';

import Nav from './components/Nav';
import GenresPage from './components/Page__Genres';
import ArtistsPage from './components/Page__Artists';
import UsersPage from './components/Page__Users';
import GlobalStyle from './GlobalStyle';

export default class App extends React.Component {
    render = () => {
        return (
            <Provider store={store}>
                <Router>
                    <Nav />
                    <Switch>
                        <Redirect exact from="/" to="/genres" />
                        <Route path="/genres" component={GenresPage} />
                        <Route path="/artists" component={ArtistsPage} />
                        <Route path="/users" component={UsersPage} />
                    </Switch>
                    <GlobalStyle />
                </Router>
            </Provider>
        );
    };
}
