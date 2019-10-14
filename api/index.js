import { ApolloServer } from "apollo-server-express";
import config from "./config";
import logger from "./libs/logger";

import { publishSubscriptionData, Database } from "./services";
import { types, resolvers } from "./graphql/modules";
import Server from "./Server";

const server = new Server(config);
server.bootstrap();

const runningServer = server.application.listen(config.port);

runningServer.on("listening", async () => {
  const ann = `|| App is running at port '${config.port}' in '${config.nodeEnv}' mode`;
  Database.open({ mongoUri: config.mongoUrl }).then(async () => {
    console.log(ann);
    await startApollo();
  });
});

runningServer.on("error", err => {
  logger.error("error while starting: ", err);
});

async function startApollo() {
  try {
    const apolloServer = new ApolloServer({
      typeDefs: [...Object.values(types)],
      resolvers,
      playground: config.playGround,
      introspection: config.introspection,
    });
    apolloServer.applyMiddleware({ app: server.application });
    apolloServer.installSubscriptionHandlers(runningServer);
    logger.info("startApollo - apollo started now!!:");
  }
  catch(err) { console.error('error inloading types', err);}
}

publishSubscriptionData();
