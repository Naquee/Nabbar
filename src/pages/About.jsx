import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <VStack minHeight="600" align="center" justify="center">
    <Box>
    <Heading as='h1' size='2xl' textAlign="center">
      WelCome to Online shoaping
    </Heading>

    <Text fontSize='xl' textAlign="center">
      we are in this Business since 1970
    </Text>

    <Flex
    mt={12}
    direction={{base:"column", md:"row"}}
    gap={2}
    alignItems="center"
    justifyContent="center"
    >
    <Button variant="solid" colorScheme='green'>Continue Shoaping</Button>
    <Button variant="solid" colorScheme='pink'>See More</Button>

    </Flex>
    </Box>

    </VStack>
  )
}

export default About