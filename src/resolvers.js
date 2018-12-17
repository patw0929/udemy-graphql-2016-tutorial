const authors = [
  {
    name: 'JK Rowling',
    age: 50,
    books: [
      'Harry Potter and the Goblet of Fire',
      'Harry Potter and the Prisoner of Azkaban',
    ],
  },
  {
    name: 'Georage RR Martin',
    age: 70,
    books: [
      'GOT - Song of Ice and Fire',
      'GOT - A Dance with Dragons',
    ],
  },
];

const resolvers =  {
  Query: {
    authors: () => {
      return authors;
    },
    author: (root, { age }) => {
      return authors.find(author => author.age === age);
    },
  },
};

export default resolvers;
