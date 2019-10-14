import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from '../../api/graphql/modules/root/resolvers';
import { graphql } from 'graphql';
import * as types from '../../api/graphql/modules/root/types';
import {userLoginTestCase,wrongEmail, wrongPassword} from './mockData';
import sinon from 'sinon';

let schema,stubs;


describe('Login test cases', () => {
    beforeAll((done) => {
        stubs =  sinon.stub(resolvers.Query, 'login')
        const typeDefs = [...Object.values(types)];
        schema = makeExecutableSchema({ typeDefs, resolvers });
        done();
    })

    test('Success test case', async () => {
        const { query, expected, queryName } = userLoginTestCase;
        stubs.returns({ 
            "message": "Login Successfully",
            "status": "ok"
        });
        const result = await graphql(schema, query, queryName);
        expect(result.data[queryName]).toEqual(expected);
        expect(result.data[queryName].status).toEqual('ok');
    })

    test('Wrong email', async () => {
        const { query, expected, queryName } = wrongEmail;
        stubs.returns({
            "message": "Invalid Credential.",
        });
        const result = await graphql(schema, query, queryName);
        expect(result.data[queryName]).toEqual(expected);
    })

    test('Wrong ', async () => {
        const { query, expected, queryName } = wrongPassword;
        stubs.returns({
            "message": "Invalid Credential.",
        });
        const result = await graphql(schema, query, queryName);
        expect(result.data[queryName]).toEqual(expected);
    })
})