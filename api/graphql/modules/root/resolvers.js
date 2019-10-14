import { 
  orderQueries,
  orderMutations,
  productQueries,
  productMutations,
  userQueries,
  productSubscriptions
} from "..";

export const resolvers = {
  Query: {
    ...userQueries,
    ...productQueries,
    ...orderQueries
  },
  LegacyProduct: {
    // owner: ({ ownerId: userId }) => {
    //   const user = userQuery.getUser('_', ({ userId }));
    //   console.log('user', user);
    //   return user;
    // }
  },
  Order: {
    id:({ _id }) => _id
  },
  Mutation: {
    ...orderMutations,
    ...productMutations
  },
  Subscription: {
    ...productSubscriptions
  }
};

