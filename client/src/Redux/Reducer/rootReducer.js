import { combineReducers } from 'redux';

import books from './books/book.reducer';
import teachers from './teachers/teacher.reducer'

const rootReducer = combineReducers({ books, teachers });

export default rootReducer;