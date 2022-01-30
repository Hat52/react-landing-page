import React from 'react';
import { Button, ButtonGroup, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react'
import {BellIcon} from '@chakra-ui/icons'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Heading Font Name',
    body: 'Inter',
  },
})
export default function First(){
    return(
        <Grid templateColumns='repeat(3, 1fr)' gap={20}>
            <GridItem   p={8} pl={122}>
                <HStack><BellIcon/>
                <Text fontSize='sm'>GND GROWTH</Text></HStack>
            </GridItem>
            <GridItem  p={6} pl={122}>
                <ButtonGroup  colorScheme="transparent" color="black" size='sm' fontWeight='semibold' spacing='4'>
                    <Button color="black"   >Home</Button>
                    <Button color="black">How It Works</Button>
                    <Button color="black">Services</Button>
                    <Button color="black">Connect</Button>
                </ButtonGroup>
            </GridItem>
            <GridItem p={4} pl={122} >
                <Stack direction="row" spacing={2}>
                    <Button variant="outline" colorScheme="#215C70" >Log In</Button>
                    <Button variant="solid" colorScheme="teal">Sign Up</Button>
                </Stack>
            </GridItem>
        </Grid>  
    )
}