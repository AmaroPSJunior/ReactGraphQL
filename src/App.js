import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';
import TodoList from './conponents/TodoList';


class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <TodoList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
