import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    getBooks {
      id
      title
      author
      description
      price
      quantityAvailable
      imageURL
      getGenres {
        genreName
      }
    }
  }
`;
