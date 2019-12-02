const LOGIN_URL = 'http://localhost:5000/api/v1/auth/login';
const SIGN_UP_URL = 'http://localhost:5000/api/v1/auth/signup';

export const logIn = (username, password) => async dispatch => {
    try {
        const res = await fetch(LOGIN_URL, {
            credentials: 'include',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            method: 'POST',
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

export const signUp = (username, email, password) => async dispatch => {
    try {
        const res = await fetch(SIGN_UP_URL, {
            credentials: 'include',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            method: 'POST',
            body: JSON.stringify({ username, email, password })
        });
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
