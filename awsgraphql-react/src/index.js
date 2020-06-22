import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

const client = new AWSAppSyncClient({
    url: aws_config.aws_appsync_graphqlEndpoint,
    region: aws_config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: aws_config.aws_appsync_apiKey,
    },
});

ReactDOM.render(<ApolloProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</ApolloProvider>, document.getElementById('root'));

// To work offline and load faster, change
// unregister() to register() below. this comes with some pitfalls.
serviceWorker.unregister();
