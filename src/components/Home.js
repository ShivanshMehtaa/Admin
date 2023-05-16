import { Box, Container, Heading, VStack, Text } from '@chakra-ui/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';


const Home = () => {
  return (
    <Box>
      {/* <MyCarousel /> */}
      <Container minH={'100vh'} p={'16'} maxW={'container.xl'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Dashboard
        </Heading>
        <VStack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          margin={4}
          direction={['column', 'row']}
        >
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 2fr))"
          >
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme={'purple'}>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button colorScheme={'purple'}>View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;

