import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Product = (props) => {
  return (
    <Box>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={props.url}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height="150px"
      width="100%"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.name}</Heading>
      <Text>
        {props.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${props.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


    </Box>
  )
}

export default Product