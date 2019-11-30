import {
    GET_GENRES_W_ARTISTS_SUCCESS,
    GET_GENRES_W_ARTISTS_FAILULRE
} from '../actions/index';

const initialState = {
    testSuccess: false
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_GENRES_W_ARTISTS_SUCCESS:
            return {
                ...state,
                testSuccess: payload
            };
        case GET_GENRES_W_ARTISTS_FAILULRE:
            return {
                ...state,
                testSuccess: payload
            };

        default:
            return state;
    }
};
