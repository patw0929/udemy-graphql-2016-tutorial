import mongoose from 'mongoose';
import authorModel from '../models/author';

const authors = [
  {
    id: 21,
    name: 'JK Rowling',
    age: 50,
    books: [
      'Harry Potter and the Goblet of Fire',
      'Harry Potter and the Prisoner of Azkaban',
    ],
  },
  {
    id: 22,
    name: 'Georage RR Martin',
    age: 70,
    books: [
      'GOT - Song of Ice and Fire',
      'GOT - A Dance with Dragons',
    ],
  },
  {
    id: 23,
    name: 'Stephen King',
    age: 60,
    books: ['The Green Mile', 'Carrie']
  },
];

const resolvers =  {
  Query: {
    authors: () => {
      return authors;
    },
    author: (root, { id }) => {
      return authors.find(author => author.id === id);
    },
  },
  Mutation: {
    addAuthor: (root, { age, name, books }) => {
      const author = new authorModel({
        age,
        name,
        books,
      });

      return author.save();
    },
  },
};

export default resolvers;
