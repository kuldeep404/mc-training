import { Order } from '../../../repositories';
import logger from '../../../libs/logger';

export const orderQueries = {
  getOrderById: async (_, { orderId: _id }) => {
    try {
      const {
        sellerId: seller,
        ...order
      } = await Order.findOne({_id})
        .lean()
        .populate({ path: 'sellerId'})
        .exec();

      return {
        ...order,
        seller
      };
    }
    catch(err) {
      logger.error(`error finding order with id: ${_id}--err--${err}`);
    }
  }
};

