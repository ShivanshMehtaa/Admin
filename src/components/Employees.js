import {
    Box,
    Container,
    Heading,
    VStack,
  } from '@chakra-ui/react';
  import { List, ListItem, ListIcon } from '@chakra-ui/react';
  
  import React from 'react';
  
  const Employees = () => {
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
            All Employees
          </Heading>
          <VStack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            margin={4}
            direction={['column', 'row']}
          >
            <List spacing={3}>
              <ListItem>
                <ListIcon color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </VStack>
        </Container>
      </Box>
    );
  };
  
  export default Employees;