import React, { useState, useEffect } from "react";
import { Button, Heading, Stack } from "@chakra-ui/react";
import Card from "../components/Card";
import { Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { QUERY_CATEGORIES, QUERY_PRODUCTS } from "../utils/queries";
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

  const categories = data?.categories || [];
  console.log(categories);

  const Category = [
    {
      label: "Brass Instruments",
      value: "brass",
      items: [
        {
          name: "Acoustic Guitar",
        },
      ],
    },
    {
      label: "Woodwind Instruments",
    },
    {
      label: "Percussion",
    },
    {
      label: "Guitars",
    },
  ];
  return (
    <div id="Categories">
      <div className="leftComponent">
        <Stack spacing={6}>
          <Heading
            letterSpacing={2}
            size="xl"
            align={"left"}
            mb={4}
            fontWeight="bold"
            fontSize="2xl"
          >
            Categories
          </Heading>
        </Stack>
        <Stack>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="cyan.500"
            direction={{
              base: "column-reverse",
              md: "row",
            }}
            onClick={(e) => {
              setSearchResults("All Instruments");
            }}
          >
            All Instruments
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="cyan.500"
            direction={{
              base: "column-reverse",
              md: "row",
            }}
            onClick={(e) => {
              setSearchResults("Woodwind Instruments");
            }}
          >
            Woodwind Instruments
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="cyan.500"
            direction={{
              base: "column-reverse",
              md: "row",
            }}
            onClick={(e) => {
              setSearchResults("Brass Instruments");
            }}
          >
            Brass Instruments
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="cyan.500"
            direction={{
              base: "column-reverse",
              md: "row",
            }}
            onClick={(e) => {
              setSearchResults("Percussion");
            }}
          >
            Percussion
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="cyan.500"
            direction={{
              base: "column-reverse",
              md: "row",
            }}
            onClick={(e) => {
              setSearchResults("Guitars");
            }}
          >
            Guitars
          </Button>
        </Stack>
      </div>
      <div className="rightComponent">
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
        <div style={{ marginTop: 16 }}>
          <Text
            letterSpacing={1}
            fontWeight={600}
            align={"center"}
            fontSize="xl"
          >
            {searchResults}
          </Text>
        </div>
        <div className="d-flex flex-wrap" style={{ marginTop: 32 }}>
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
        </div>
      </div>
    </div>
  );
}
