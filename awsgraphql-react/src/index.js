import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import gql from 'graphql-tag';
import * as serviceWorker from './serviceWorker';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

//import { listEmployees } from './graphql/queries.js';

const client = new AWSAppSyncClient({
    url: aws_config.aws_appsync_graphqlEndpoint,
    region: aws_config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: aws_config.aws_appsync_apiKey,
    }
});

// client.query({
//     query: gql(listEmployees)
// }).then(({ data }) => {
//     console.log(data);
// });

ReactDOM.render(<ApolloProvider client={client}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
