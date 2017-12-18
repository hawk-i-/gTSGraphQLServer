const books = require('../../data/books.json');
import { filter } from 'lodash';

export const findBooks = (predicateFunc): Array<any> => {
    return filter(books, predicateFunc);
};
