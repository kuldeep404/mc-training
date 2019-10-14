import { Product } from '../../../repositories';
import { pubSub } from '../root/subscriptions';

export const productMutations = {
  saveProduct: async(_, { product: data }) => {
    try {
      const product = new Product({...data});
      const productAdded = await product.save();

      pubSub.publish('productAdded', { productAdded });
      return productAdded;
    }
    catch(err) {
      console.log('error in saving product', err);
    }
  }
};

