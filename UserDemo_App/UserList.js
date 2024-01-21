/*CreateUser.js : C'est un composant React qui pourrait être utilisé pour créer un nouvel utilisateur. Dans cet exemple, il est simplement déclaré,
et vous auriez besoin de le compléter avec un formulaire ou une logique pour gérer la création d'un utilisateur.*/

// Importations nécessaires de React et de l'API Apollo Client pour React
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Définition de la requête GraphQL pour récupérer la liste des utilisateurs
const GET_USERS = gql`
  query {
    users {
      id
      first_name
      last_name
      email
      birth_date
      gender
    }
  }
`;

// Définition du composant UserList
function UserList() {
  // Utilisation du hook useQuery pour exécuter la requête GraphQL
  const { loading, error, data } = useQuery(GET_USERS);

  // Gestion des états de chargement et d'erreur
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur de chargement des utilisateurs</p>;

  // Affichage de la liste des utilisateurs si la requête est réussie
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {/* Boucle à travers les utilisateurs et affichage de leurs informations */}
        {data.users.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exportation du composant UserList pour qu'il puisse être utilisé ailleurs
export default UserList;
