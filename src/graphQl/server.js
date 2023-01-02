import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://ecommerce-service-backend.onrender.com/',
    cache: new InMemoryCache()
});


export default client
