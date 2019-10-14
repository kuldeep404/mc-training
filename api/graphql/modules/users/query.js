import { User } from '../../../repositories';
import logger from '../../../libs/logger';
import config from '../../../config';
import * as jwt from 'jsonwebtoken';

export const userQueries = {
  getUser: async (_, { userId }) => {
    try {
      const user = await User.load(userId);
      return user;
    }
    catch(err) {
      logger.error(`error finding user with id: ${userId}`);
    }
  },
  
  login:async (parent,args)=> {
    try {
      const { input:{ email, password }} = args
      const login = await User.findOne({email, password});
      const result = JSON.parse(JSON.stringify(login));
      const token = jwt.sign(result, config.secretKey);
      if(!result) {
        return {
          error: 'error',
          message: 'Invalid Creadential.',
        }
      }
      else {
        return {
          message:'Login Successfully',
          data: token,
          status: 'ok',
        }

      }  
    }
    catch(error) {
      return error;
    }
  }
};
