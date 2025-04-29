import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // your backend running locally
  cache: new InMemoryCache(),
});

export default client;
