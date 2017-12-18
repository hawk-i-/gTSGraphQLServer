import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';


export const getTypeDefs = (): string => {
    let typeDefs = '';
    let queries = '';

    for (let fileName of fs.readdirSync(__dirname)) {
        if (/^[0-9a-zA-Z]+\.js$/.test(fileName) && path.join(__dirname, fileName) !== __filename) {
            let model = require(`./${fileName}`);
            typeDefs += _.isString(model.typeDef) ? '\n' + model.typeDef : '' ;
            queries += _.isString(model.query) ? '\n' + model.query : '' ;
        }
    }

    if (queries !== '') {
        typeDefs += `type Query { ${queries} }`;
    }

    return typeDefs;
};

export const getResolvers = () => {
    let resolvers = {};
    for (let fileName of fs.readdirSync(__dirname)) {
        if (/^[0-9a-zA-Z]+\.js$/.test(fileName) && path.join(__dirname, fileName) !== __filename) {
            let model = require(`./${fileName}`);
            _.isObjectLike(model.resolvers) && _.merge(resolvers, model.resolvers);
        }
    }
    return resolvers;
};