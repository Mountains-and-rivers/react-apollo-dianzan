import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://47.111.77.29:1337/graphql",
    // request: operation => {
    //     operation.setContext({
    //         headers: {
    //             authorization: `Bearer 949842e5e5a7d06de8bedf1bb7fff96181f6ef92`,
    //         },
    //     });
    // }
});

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
