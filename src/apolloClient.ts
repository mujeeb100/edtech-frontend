import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://supreme-shad-35.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret': 'bEqp3zIMH9yy6Ac01CZMa8aNfS7sVk24fH8oyi8ECJeuLBaR5g3uO1mlJp04vrmb',
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
