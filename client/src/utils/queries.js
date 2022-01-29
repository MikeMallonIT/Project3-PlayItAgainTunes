import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      description
      price
      quantity
      image
     
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
query products($_id: ID!) {
  products(ID:$_id) {
       _id
  name
  description
  image
  price
  quantity
 
  
  }
  }
`;

export const QUERY_CATEGORIES = gql`
query {
  categories {
    _id
  name
  products{
    _id
    name
    image
    description
    quantity
    price
  }
  }
}
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
