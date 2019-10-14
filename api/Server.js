import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import Express from "express";
import helmet from "helmet";
import methodOverride from "method-override";
import morganBody from "morgan-body";

import router from "./router";
import { errorHandlerRoute } from "./libs/routes";
import { EnvVars } from "./libs/constants";

export default class Server {
  constructor(coreConfig) {
    this.coreConfig = coreConfig;
    this.app = new Express();
  }

  get application() {
    return this.app;
  }

  async bootstrap() {
    this.initHelmet();
    this.initCompress();
    this.initCookieParser();
    this.initCors();

    this.initJsonParser();
    this.initMethodOverride();
    this.initLogger();

    this.setupRoutes();
  }
  
  initCompress() {
    this.app.use(compress());
  }

  initCookieParser() {
    this.app.use(cookieParser());
  }

  initCors() {
    //TODO: need to add proper CORS
    // const corsOptions = {
    //   origin: '*',
    //   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    // };

    this.app.use(cors());
  }

  initHelmet() {
    this.app.use(helmet());
  }

  initJsonParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  initLogger() {
    if (this.coreConfig.nodeEnv !== EnvVars.TEST) {
      morganBody(this.app);
    }
  }

  initMethodOverride() {
    this.app.use(methodOverride());
  }
  setupRoutes() {
    const { apiPrefix } = this.coreConfig;

    this.app.use(apiPrefix, router);

    //this.app.use(notFoundRoute);

    this.app.use(errorHandlerRoute());
  }
}
