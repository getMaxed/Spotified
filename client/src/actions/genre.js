import {
    GET_GENRES_W_ARTISTS_SUCCESS,
    GET_GENRES_W_ARTISTS_FAILULRE
} from './index';

const URL__GET_GENRES_W_ARTISTS = 'localhost:500/api/v1/genres';

export const getGenresWithArtists = () => async dispatch => {
    try {
        const res = await fetch(URL__GET_GENRES_W_ARTISTS);
        const data = res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }

    // try {
    //     Promise.resolve({
    //         success: true
    //     });
    //     dispatch({
    //         type: GET_GENRES_W_ARTISTS_SUCCESS,
    //         payload: true
    //     });
    // } catch (err) {
    //     console.error(err);
    //     Promise.reject({
    //         success: false
    //     });
    //     dispatch({
    //         type: GET_GENRES_W_ARTISTS_FAILULRE,
    //         payload: false
    //     });
    // }
};
