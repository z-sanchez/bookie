import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    getBooks {
      title
      author
      getGenres {
        genreName
      }
    }
  }
`;
