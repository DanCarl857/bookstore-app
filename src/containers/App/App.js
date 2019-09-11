import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import Header from './../../components/Header/Header'
import BookList from './../../components/BookList/BookList'

// Apollo Client setup
const client = new ApolloClient({
  uri: 'http://localhost:4567/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
