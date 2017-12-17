const books = require('../../data/books.json');

export const resolvers = {
    books: () => {
        return books
    }
};

export const typeDef = `
    type Book { 
        title: String
        author: String 
    }
`;