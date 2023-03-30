import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query {
    books {
      id
      name
      description
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($name: String!, $description: String!) {
    addBook(bookRequest: { name: $name, description: $description }) {
      id
      name
      description
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation removeBook($id: ID!) {
    removeBook(id: { id: $id }) {
      id
    }
  }
`;

export const EDIT_BOOK = gql`
  mutation EditBook($id: ID!, $name: String!, $description: String!) {
    editBook(
      idArgs: { id: $id }
      bookRequest: { name: $name, description: $description }
    ) {
      id
      name
      description
    }
  }
`;
