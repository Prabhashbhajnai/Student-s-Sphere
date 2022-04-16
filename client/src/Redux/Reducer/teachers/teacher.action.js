import axios from 'axios';

import { GET_TEACHERS } from './teacher.type';

export const getTeachers = () => async (dispatch) => {
    try {
        const teacherList = await axios({
            method: "GET",
            url: `http://localhost:4000/teachers`,
        });

        return dispatch({ type: GET_TEACHERS, payload: teacherList.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};