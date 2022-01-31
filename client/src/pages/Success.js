import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
  
    <Box
    maxW="7xl"
    mx="auto"
    mb={40}
    px={{
      base: '0',
      lg: '12',
    }}
    py={{
      base: '0',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column-reverse',
        lg: 'row',
      }}
      spacing={{
        base: '0',
        lg: '20',
      }}
    >
      <Box
        width={{
          lg: 'sm',
        }}
        transform={{
          base: 'translateY(-50%)',
          lg: 'none',
        }}
        bg={{
          base: useColorModeValue('red.50', 'gray.700'),
          lg: 'transparent',
        }}
        mx={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        px={{
          base: '6',
          md: '8',
          lg: '0',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            lg: '10',
          }}
        >
          <Stack
            spacing={{
              base: '2',
              lg: '4',
            }}
          >
            <Heading size="xl" color={useColorModeValue('cyan.500', 'cyan.300')}>
              Success!
            </Heading>
            <Heading size="xl" fontWeight="normal">
              Thank you for your purchase!
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link 
            a="as"
            href='./home'
            color={useColorModeValue('cyan.500', 'cyan.300')} 
            fontWeight="bold" 
            fontSize="lg">
              You will now be redirected to the home page
            </Link>
            <Icon color={useColorModeValue('cyan.500', 'cyan.300')} as={FaArrowRight} />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          display={{
            base: 'none',
            sm: 'initial',
          }}
          src="https://data.whicdn.com/images/317635759/original.jpg"
          alt="player"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  </Box>
  );
}

export default Success;