import { GET_BOOKS } from "./book.type";

const INITIAL_STATE = {
    books: [],
};

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default booksReducer;