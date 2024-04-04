import {Stack} from 'expo-router'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://avdiivka.stepzen.net/api/dusty-elephant/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 
        "apikey avdiivka::stepzen.io+1000::9bf5ede6732cedbe5ef86fb99ded399769c1f620277b7770da2c6e3aa5f7d9c6"
    }
  });

const RootLayout = () => {
    return <ApolloProvider client={client}>
     <Stack/>
    </ApolloProvider>
}

export default RootLayout