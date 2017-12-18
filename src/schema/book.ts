import { find } from 'lodash';
import { findBooks } from '../models/book';

export const resolvers = {
    Query: {
        books: () => {
            return findBooks(() => true);
        },
        book: (obj, {id}, context, info) => {
            let books = findBooks(b => b.id === id);
            return books.length > 0 ? books[0] : null;
        }
    }
};

export const typeDef = `
    type Book { 
        id: ID
        title: String
        author: String 
    }
`;

export const query =`
    books: [Book]
    book(id: ID!): Book
`;
