import { Order } from '../../../repositories';

export const orderMutations = {
  saveOrder: async(_, { order: data }) => {
    console.log('data', data);
    try {
      const order = new Order({...data});
      const savedOrder = await order.save();

      console.log('savedOrder', savedOrder);

      return savedOrder;
    }
    catch(err) {
      console.error('error in saving order', err);
    }
  }
};
