import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App/App';
import CreateBook from './components/CreateBook/CreateBook';
import EditBook from './components/EditBook/EditBook';

// Apollo Client setup
const client = new ApolloClient({
    uri: 'http://localhost:4567/graphql'
});

const ROUTES = (
    <Router>
        <ApolloProvider client={client}>
            <div>
                <Route exact path="/" component={App} />
                <Route name="edit" path="/edit/:bookId" component={EditBook} />
                <Route path="/create-book" component={CreateBook} />
            </div>
        </ApolloProvider>
    </Router>
)

ReactDOM.render(ROUTES, document.getElementById('root'));
