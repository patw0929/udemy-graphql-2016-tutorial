import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Author {
    id: Int
    age: Int
    name: String
    books: [String]
  }

  type Query {
    authors: [Author]
    author(id: Int): Author
  }
`;

export default typeDefs;
