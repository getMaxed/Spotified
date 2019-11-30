import {
    GET_GENRES_W_ARTISTS_SUCCESS,
    GET_GENRES_W_ARTISTS_FAILULRE
} from './index';

// const URL_GENRES = 'localhost'

export const getGenresWithArtists = () => async dispatch => {
    try {
        Promise.resolve({
            success: true
        });
        dispatch({
            type: GET_GENRES_W_ARTISTS_SUCCESS,
            payload: true
        });
    } catch (err) {
        console.error(err);
        Promise.reject({
            success: false
        });
        dispatch({
            type: GET_GENRES_W_ARTISTS_FAILULRE,
            payload: false
        });
    }
};
