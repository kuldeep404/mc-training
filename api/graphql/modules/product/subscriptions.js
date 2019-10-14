import { pubSub } from '../root/subscriptions';


export const productSubscriptions = {
  productAdded: {
    subscribe: () => { console.log('hiting subsription');
      return pubSub.asyncIterator('productAdded')
    }
  },
  productDeleted: {
    subscribe: () => pubSub.asyncIterator('productDeleted')
  }
};
