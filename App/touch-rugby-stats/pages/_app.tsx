import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri: 'https://localhost:7015/graphql/',
    cache: new InMemoryCache()
  });

  return (

    <ApolloProvider client={client}>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp
