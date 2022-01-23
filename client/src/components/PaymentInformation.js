import {
    Box,
    Center,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { GooglePayLogo, MasterCardLogo, PayPalLogo, VisaLogo } from './Logos'
  
  export const PaymentInformation = () => (
    <Stack
      spacing={{
        base: '6',
        md: '10',
      }}
    >
      <Heading size="md">Payment Information</Heading>
      <RadioGroup colorScheme="cyan" size="lg">
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing="6"
        >
          <Radio defaultChecked spacing="3" flex="1">
            <Stack spacing="1.5">
              <Box>
                <Text color={useColorModeValue('black', 'white')} fontWeight="medium">
                  Credit Card
                </Text>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  Pay with credit card via Stripe
                </Text>
              </Box>
              <HStack>
                <Center
                  borderWidth="1px"
                  width="8"
                  height="5"
                  bg={useColorModeValue('transparent', 'gray.50')}
                  borderColor={useColorModeValue('gray.300', 'gray.50')}
                  borderRadius="base"
                >
                  <VisaLogo />
                </Center>
                <Center
                  borderWidth="1px"
                  width="8"
                  height="5"
                  bg={useColorModeValue('transparent', 'gray.50')}
                  borderColor={useColorModeValue('gray.300', 'gray.50')}
                  borderRadius="base"
                >
                  <MasterCardLogo />
                </Center>
                <Center
                  borderWidth="1px"
                  width="8"
                  height="5"
                  bg={useColorModeValue('transparent', 'gray.50')}
                  borderColor={useColorModeValue('gray.300', 'gray.50')}
                  borderRadius="base"
                >
                  <GooglePayLogo />
                </Center>
              </HStack>
            </Stack>
          </Radio>
          <Radio spacing="3" flex="1">
            <Stack spacing="1.5">
              <Box>
                <Text color={useColorModeValue('black', 'white')} fontWeight="medium">
                  PayPal
                </Text>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  Pay with your PayPal account
                </Text>
              </Box>
              <HStack>
                <Center
                  borderWidth="1px"
                  width="8"
                  height="5"
                  bg={useColorModeValue('transparent', 'gray.50')}
                  borderColor={useColorModeValue('gray.300', 'gray.50')}
                  borderRadius="base"
                >
                  <PayPalLogo />
                </Center>
              </HStack>
            </Stack>
          </Radio>
        </Stack>
      </RadioGroup>
      <Stack spacing="8">
        <Stack direction="row" spacing="6">
          <FormControl id="card-number">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>
              Credit card number
            </FormLabel>
            <Input
              name="card-number"
              placeholder="Card number"
              focusBorderColor={useColorModeValue('cyan.500', 'cyan.200')}
            />
          </FormControl>
          <FormControl id="card-name">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Name on card</FormLabel>
            <Input
              name="card-name"
              placeholder="Card name"
              focusBorderColor={useColorModeValue('cyan.500', 'cyan.200')}
            />
          </FormControl>
        </Stack>
        <HStack spacing="6">
          <FormControl id="card-expiry" width="full">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Expiry date</FormLabel>
            <HStack spacing="3">
              <Select
                aria-label="Select Month"
                focusBorderColor={useColorModeValue('cyan.500', 'cyan.200')}
              >
                <option>01</option>
              </Select>
              <Select
                aria-label="Select Year"
                focusBorderColor={useColorModeValue('cyan.500', 'cyan.200')}
              >
                <option>2017</option>
              </Select>
            </HStack>
          </FormControl>
          <FormControl id="card-cvc">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>CVV/CVC</FormLabel>
            <Input
              name="card-cvc"
              placeholder="CVC"
              focusBorderColor={useColorModeValue('cyan.500', 'cyan.200')}
            />
          </FormControl>
        </HStack>
      </Stack>
    </Stack>
  )