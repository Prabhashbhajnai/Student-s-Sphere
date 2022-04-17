import { combineReducers } from 'redux';

import books from './books/book.reducer';
import teachers from './teachers/teacher.reducer';
import quespapers from './Quespaper/quespaper.reducer';

const rootReducer = combineReducers({ books, teachers, quespapers });

export default rootReducer;