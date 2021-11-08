import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { addResolversToSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server';
import { OAuth2Client } from 'google-auth-library';
import { join } from 'path';

const schema = loadSchemaSync(join(__dirname, '../schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
});

const resolvers = {
  Query: {
    addTodo: () => null,
  },
};

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
const oAuth2Client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URL);
const server = new ApolloServer({ 
  schema: schemaWithResolvers,
  cors: true,
  context: async (ctx) => {
    const token = ctx.req.headers.authorization?.replace('Bearer ', '') ?? '';
    // verify token
    const tokenInfo = oAuth2Client.getTokenInfo(token);
    console.log(tokenInfo);
} });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});