import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from '../../api/graphql/modules/root/resolvers';
import { graphql } from 'graphql';
import * as types from '../../api/graphql/modules/root/types';
import {login,wrongEmail, wrongPassword} from './mockData';
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
        const { query, expected, queryName } = login;
        stubs.returns({ 
            "message": "Login Successfully",
            "status": "ok",
            "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGl0Lmt1bWFyQHN1Y2Nlc3NpdmUudGVjaCIsInNoaXBwaW5nIjp7ImFtb3VudCI6MCwidHlwZSI6ImZsYXQifSwiZHVlRGF5cyI6MCwibWlycm9yVXNlciI6IiIsInRyaWFsRGF5cyI6MCwiaXNPdHAiOmZhbHNlLCJmaXJzdGxvZ2luIjp0cnVlLCJpc0ZpcnN0UHJvZHVjdCI6dHJ1ZSwiaXNGaXJzdE9yZGVyIjp0cnVlLCJpc0ZpcnN0SW52aXRlIjp0cnVlLCJpc0ZpcnN0VmVuZG9yIjp0cnVlLCJpc0ZpcnN0QXBwcm92YWwiOnRydWUsImlzRmlyc3RQdWJsaXNoIjp0cnVlLCJpc0dlbmVyYWxTZXR1cCI6dHJ1ZSwiaXNEaXNjb3VudCI6ZmFsc2UsImlzQ3VzdG9tQ2hhcmdlIjpmYWxzZSwiaXNNYXJrdXAiOmZhbHNlLCJpc09yZGVyQ29ubmVjdCI6ZmFsc2UsImlzV2ViaG9va1VwZGF0ZWQiOmZhbHNlLCJpc0RvbWFpbkFjdGl2ZSI6ZmFsc2UsImlzSGlkZU1jSW5mbyI6ZmFsc2UsImlzUmVhZE9ubHkiOmZhbHNlLCJpc0RlbGV0ZWQiOmZhbHNlLCJpc05ld1Nob3BpZnlQcm9kdWN0IjpmYWxzZSwicHJvZHVjdEFwcHJvdmFsIjoic2VsZWN0ZWQiLCJpc1JlcXVpcmVkUGVybWlzc2lvbiI6ZmFsc2UsImlzUHJvZHVjdFN5bmMiOmZhbHNlLCJpc0NhcnJpZXJTZXJ2aWNlIjpmYWxzZSwiX2lkIjoiNWQ5YjA4MTljOGNjYjY4YTA0OGRkZTBkIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsInZvbHVtZSI6W10sImlhdCI6MTU3MDYwMzgzNn0.Bx7UPJkM8eXRhkamiqhuGfFh4OAoIWVq9XNegT2TpSU"
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
        expect(result.data[queryName].message).toEqual('Invalid Credential.');
        
    })

    test('Wrong ', async () => {
        const { query, expected, queryName } = wrongPassword;
        stubs.returns({
            "message": "Invalid Credential.",
        });
        const result = await graphql(schema, query, queryName);
        expect(result.data[queryName]).toEqual(expected);
        expect(result.data[queryName].message).toEqual('Invalid Credential.');
    })
})