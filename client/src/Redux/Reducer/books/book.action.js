import axios from 'axios';

// Redux types
import { GET_BOOKS, GET_SPECIFIC_BOOK } from './book.type';

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

export const getRomance = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=romance`,
        });

        return dispatch({ type: GET_BOOKS, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getTextbook = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=textbook`,
        });

        return dispatch({ type: GET_BOOKS, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getScifi = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=Scifi`,
        });

        return dispatch({ type: GET_BOOKS, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getScitech = () => async (dispatch) => {
    try {
        const bookList = await axios({
            method: "GET",
            url: `http://localhost:4000/books/?genre=Scitech`,
        });

        return dispatch({ type: GET_BOOKS, payload: bookList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getSpecificBook = (_id) => async (dispatch) => {
    try {
        const book = await axios({
            method: "GET",
            url: `http://localhost:4000/books/${_id}`,
        });

        return dispatch({ type: GET_SPECIFIC_BOOK, payload: book.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};