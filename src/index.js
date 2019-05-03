import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://47.111.77.29:1337/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2M5OTAyODg3Zjg2YjRlMmNiY2Q1YzYiLCJpYXQiOjE1NTY4ODc2NDQsImV4cCI6MTU1OTQ3OTY0NH0.cX8F9fIxQUwKfyIqXskUyyi7v9j7fi9qvC1XoEjmfHs`,
            },
        });
    }
});

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
