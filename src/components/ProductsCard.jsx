import { Box, Button, Center, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const ProductsCard = ({id,name, color, final_price, images,gender }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Center><Image src={images[0]} objectFit="cover"/></Center>
        <Flex direction="column" mt={4}>
        <Box>
        <Text>{name}</Text>
        <Text>{gender}</Text>
        </Box>
        </Flex>
        <Spacer/>
        <Flex align="center" mt={4} justifyContent="space-evenly">
        <Text>RS: {final_price}</Text>
        <Button variant="outline" colorScheme='pink'>Add To Cart</Button>
        </Flex>
    </Box>
  )
}

export default ProductsCard