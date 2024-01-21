/*server.js : C'est le fichier principal de votre serveur GraphQL côté serveur. Il utilise Apollo Server pour créer un serveur GraphQL, 
définir un schéma et mettre en œuvre des résolveurs pour les requêtes et mutations.*/

import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', //  l'URL du serveur GraphQL
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/create" component={CreateUser} />
          <Route path="/update/:id" component={UpdateUser} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
