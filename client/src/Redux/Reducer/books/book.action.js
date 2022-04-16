import axios from 'axios';

// Redux types
import { GET_BOOKS } from './book.type';

export const getFantasyFiction = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=fantasy fiction`,
        });

        return dispatch({ type: GET_BOOKS, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};