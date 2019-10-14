import { gql } from 'apollo-server';

export { orderTypes } from '../order';
export { productTypes } from '../product';
export { userTypes } from '../users';

export const root = gql`
  type Query {
    root: String
    login(input: Login): LoginResponse
  }

  type Mutation {
    root: String
  }

  type Subscription {
    root: String
  }
`;
