/*App.js : C'est le fichier principal de votre application React. Il peut contenir la configuration générale de l'application, 
les composants principaux, et il est souvent utilisé pour intégrer des composants plus petits.*/

const express = require('express');
const { ApolloServer, gql } = require('apollo-server');
const { buildSchema } = require('graphql');

const app = express();

// Définir le schéma GraphQL
const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    birth_date: String!
    gender: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
  }

  input UserInput {
    first_name: String!
    last_name: String!
    email: String!
    birth_date: String!
    gender: String!
  }
`;

// Initialiser une liste d'utilisateurs (pour simplifier)
let users = [
  { id: '1', first_name: 'John', last_name: 'Doe', email: 'john@example.com', birth_date: '1990-01-01', gender: 'Male' },
  { id: '2', first_name: 'Jane', last_name: 'Doe', email: 'jane@example.com', birth_date: '1995-05-15', gender: 'Female' },
];

// Définir les résolveurs
const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    createUser: (_, { input }) => {
      const newUser = { id: String(users.length + 1), ...input };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_, { id, input }) => {
      const index = users.findIndex(user => user.id === id);
      if (index !== -1) {
        users[index] = { ...users[index], ...input };
        return users[index];
      }
      return null;
    },
  },
};

// Créer le serveur Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Démarrer le serveur Apollo
const PORT = 4000;
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Serveur GraphQL en cours d'exécution sur ${url}`);
});
