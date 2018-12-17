import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

mongoose.connect('mongodb://localhost/graphqlTutorial', {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('connection to database was successful!');
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
