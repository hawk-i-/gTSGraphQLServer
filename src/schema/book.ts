const books = require('../../data/books.json');
import { find } from 'lodash';


export const resolvers = {
    Query: {
        books: () => {
            return books
        },
        book: (obj, {id}, context, info) => {
            console.log(id);
            return find(books, (b) => {
                return b.id === id;
            });
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
