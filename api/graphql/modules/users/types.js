import { gql } from 'apollo-server';

export const userTypes = gql`
  extend type Query {
    getUser(userId: ID!): User
  }

  # extend type Mutation {}

  # extend type Subscription {}

  type User {
    id: String!
    isGeneralSetup: Boolean
    email: UserEmail!
    shopId: String
    firstName: String
    lastName: String
    brandName: String
    location: String
    roles: UserRole!
  }

  type UserRole {
    name: String!
  }

  type UserEmail {
    address: String
    verified: Boolean
  }

  input Login {
    email: String
    password: String
  }

  type LoginResponse {
    message:String 
    data: String
    status: String
  }
`;

