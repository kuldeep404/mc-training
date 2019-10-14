import { gql } from 'apollo-server';

export const orderTypes = gql`
  extend type Query {
    getOrderById(orderId: ID!): Order!
  }

  extend type Mutation {
    saveOrder(order: OrderInput!): Order!
  }

  # extend type Subscription {}

  input OrderInput {
    sellerId: String!
    shop: String!
    shopifyOrderId: String!
    orderNumber: String! 
  }

  type Order {
    id: String!
    seller: User!
    shop: String!
    shopifyOrderId: String!
    orderNumber: String!
  }
`;

