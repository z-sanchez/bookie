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

export const SEARCH_BOOKS_BY_TERM = gql`
  query SearchBooksByTerm($input: SearchBooksInput) {
    searchBooks(data: $input) {
      books {
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
      moreResults
    }
  }
`;
