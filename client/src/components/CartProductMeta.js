import {
    Box,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiTool } from 'react-icons/fi'

export const CartProductMeta = (props) => {
    const { isGiftWrapping = true, image, name, description } = props
    return (
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={image}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{name}</Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
              {description}
            </Text>
          </Stack>
          {isGiftWrapping && (
            <HStack spacing="1" mt="3" color={mode('gray.600', 'gray.400')}>
              <Icon as={FiTool} boxSize="4" />
              <Link fontSize="sm" textDecoration="underline" href={"../services"}>
                Add-on Services
              </Link>
            </HStack>
          )}
        </Box>
      </Stack>
    )
  }
  
//Cart Product Meta is associated to to the Image apperance, Heart save later
// This maybe a component that may be unncessary 