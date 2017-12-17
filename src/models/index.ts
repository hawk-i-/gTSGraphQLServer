import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';


export const getTypeDefs = (): string => {
    let typeDefs = '';
    for (let fileName of fs.readdirSync(__dirname)) {
        if (/^[0-9a-zA-Z]+\.js$/.test(fileName) && path.join(__dirname, fileName) !== __filename) {
            let module = require(`./${fileName}`);
            typeDefs += _.isString(module.typeDef) ? '\n' + module.typeDef : '' ;
        }
    }

    return typeDefs;
};

export const getResolvers = () => {
    let resolvers = {};
    for (let fileName of fs.readdirSync(__dirname)) {
        if (/^[0-9a-zA-Z]+\.js$/.test(fileName) && path.join(__dirname, fileName) !== __filename) {
            let module = require(`./${fileName}`);
            _.isObjectLike(module.resolvers) && _.merge(resolvers, module.resolvers);
        }
    }
    return {
        Query: resolvers
    };
};