import { combineReducers } from 'redux';

import books from './books/book.reducer';

const rootReducer = combineReducers({ books });

export default rootReducer;