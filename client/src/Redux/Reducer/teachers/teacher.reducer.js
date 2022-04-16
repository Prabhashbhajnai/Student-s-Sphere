import { GET_TEACHERS } from "./teacher.type";

const INITIAL_STATE = {
    teachers: [],
};

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TEACHERS:
            return {
                ...state,
                teachers: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default booksReducer;