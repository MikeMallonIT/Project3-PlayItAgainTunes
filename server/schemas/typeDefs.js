const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
      _id: ID
      name: String!
      products: [Product]
  }
  type Product {
      _id: ID
      name: String!
      description: String
      image: String
      price: Float!
      quantity: Int
      
  }
  type Order {
      _id: ID
      purchaseDate: String
      products: [Product]
  }
  type User {
      _id: ID
      firstName: String!
      lastName: String!
      email: String!
      orders: [Order]
  }
  type Checkout {
      session: ID
  }
  type Auth {
      token: ID!
      user: User
  }
  type Query {
    categories: [Category]
    products(_id: [ID!]): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
  type Mutation {
      login(email: String!, password: String!): Auth
      addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
      addOrder(products: [ID]!): Order
      updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
      updateProduct(_id: ID!, quantity: Int!): Product
  }
`;

module.exports = typeDefs;