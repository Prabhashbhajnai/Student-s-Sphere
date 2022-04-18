import axios from 'axios';

// Redux type
import { GET_QUESTION, POST_QUESTION } from './forum.type';

export const getQuestion = () => async (dispatch) => {
    try {
        const questionList = await axios({
            method: "GET",
            url: `http://localhost:4000/forum`
        });

        return dispatch({ type: GET_QUESTION, payload: questionList.data })
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error })
    }
};