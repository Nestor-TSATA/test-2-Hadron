/*UserList.js : C'est un autre composant React qui affiche la liste des utilisateurs. Il utilise Apollo Client pour exécuter une requête 
GraphQL afin de récupérer les utilisateurs depuis le serveur.*/

// Importations nécessaires de React et de l'API Apollo Client pour React
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Définition de la mutation GraphQL pour créer un utilisateur
const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
      first_name
      last_name
      email
      birth_date
      gender
    }
  }
`;

// Définition du composant CreateUser
function CreateUser() {
  // Utilisation du hook useMutation pour exécuter la mutation GraphQL
  const [createUser] = useMutation(CREATE_USER);

  // Votre logique pour gérer la création d'un utilisateur ici

  // Affichage du formulaire pour créer un utilisateur
  return (
    <div>
      <h1>Créer un utilisateur</h1>
      {/* Votre formulaire pour créer un utilisateur */}
    </div>
  );
}

// Exportation du composant CreateUser pour qu'il puisse être utilisé ailleurs
export default CreateUser;
