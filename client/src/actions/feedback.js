import {} from './index';

const postFeedbackURL = 'http://localhost:5000/api/v1/feedback';

export const postFeedback = fb => async dispatch => {
    try {
        const res = await fetch(postFeedbackURL, {
            headers: {
                'Content-Type': 'Application/JSON'
            },
            method: 'POST',
            body: JSON.stringify(fb)
        });
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};
