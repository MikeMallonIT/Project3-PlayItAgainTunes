import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Center, Text, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

export default function Categories() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  const [searchResults, setSearchResults] = useState();

  // const categories = data?.categories || [];
  // console.log(categories);

  return (
    <Center>
      <div id="Categories">
        {/* UNCOMMENT BELOW FOR categories BUTTONS*/}

        {/* <div className="leftComponent">

        <Stack spacing={6}>
          <CategoryMenu></CategoryMenu>
        </Stack>

      </div> */}

        <div className="centerComponent">
          <div>
            <Text
              fontWeight={800}
              letterSpacing={8}
              align={"center"}
              fontSize="5xl"
            >
              PLAY IT AGAIN TUNES
            </Text>
          </div>
          <div>
            <Text letterSpacing={2} align={"center"} fontSize="2xl">
              Musical Instrumental Rentals
            </Text>
          </div>
          {/* <div style={{ marginTop: 16 }}>
          <Text
            letterSpacing={1}
            fontWeight={600}
            align={"center"}
            fontSize="xl"
          >
            {searchResults}
          </Text>
        </div> */}
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
            spacing="15px"
          >
            {filterProducts().map(
              (product) => (
                //   searchResults &&
                //   category.label === searchResults &&
                //   category.items.map((item) => (
                <div className="singleCard" key={product._id}>
                  {/* {console.log("categories ", category)}
                  {console.log("search ", searchResults)} */}
                  <Card
                    _id={product._id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    des={product.description}
                  />
                </div>
              )
              //   ))
            )}
          </SimpleGrid>
        </div>
      </div>
    </Center>
  );
}
