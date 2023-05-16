import { Button, Container, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container width={'container.xl'} h={"100vh"} p={'14'} w={['full', '96']}>
        <VStack color={"purple.500"} h={'100vh'} p={'16'} >
            <AiOutlineCloudUpload size={'10vmax'}/>
            <form action="">
                <VStack>
                    <Input placeholder='Title'/>
                    <Input placeholder='Category'/>
                    <Input placeholder='Closing Date'/>
                    <Input placeholder='Preffered'/>
                    <Button variant={'outline'} colorScheme={'purple'} type={'submit'}>Upload</Button>
                </VStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload
