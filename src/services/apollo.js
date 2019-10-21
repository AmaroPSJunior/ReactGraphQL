import { ApolloClient } from 'apollo-client';
import { HttpLink} from 'apollo-link-http';
import { InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/ck1w59b3r7bzd0187bn9sv5v4',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;