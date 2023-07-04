import React from 'react'
import { VStack ,Flex, SimpleGrid, Link,Button, HStack, Text} from '@chakra-ui/react'

const Footer = () => {
    const dummyLink = new Array(12).fill(0).map((_, i) => `Link ${i+1}`);

  return (
    <VStack py={10} bg="gray.200" mt={4}>
    <Flex align="center" justify="center">
    <SimpleGrid columns={{base:2,md:3, lg:4}} spacing="4rem">
    {
        dummyLink.map((link) => {
            return(
                <Link><Button variant="ghost">{link}</Button></Link>
            )
        })
    }

    </SimpleGrid>

    </Flex>

    <HStack>
        <Text>&copy; {new Date().getFullYear()} Unique Cofffie Shoap</Text>
        <Text>|</Text>
        <Text>All rights resurvred</Text>
      
    </HStack>
 

    </VStack>
  )
}

export default Footer