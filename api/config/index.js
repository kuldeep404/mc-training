import dotenv from 'dotenv';
import { EnvVars } from '../libs/constants';


if (process.env.NODE_ENV === EnvVars.TEST) {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config();
}

export default {
  apiPrefix: process.env.API_PREFIX || '/api',
  mongoUrl: process.env.MONGO_URL,
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  socketUrl: process.env.SOCKET_URL,
  playGround: process.env.PLAYGROUND || true,
  introspection: process.env.INTROSPECT || true,
  secretKey: process.env.SECRET_KEY,
};
