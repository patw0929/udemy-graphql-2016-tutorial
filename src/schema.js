import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Author {
    id: String
    age: Int
    name: String
    books: [String]
  }

  type Query {
    authors: [Author]
    author(id: String): Author
  }

  type Mutation {
    addAuthor(name: String, age: Int, books: [String]): Author
  }
`;

export default typeDefs;
