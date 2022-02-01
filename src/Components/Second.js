import { Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';
import Card from './Cards/Cards'
import CardBG1 from '../assests/img/Cardbg1.png'
import CardBG2 from '../assests/img/Cardbg2.png'
export default function Second(){
    const cardProps = {
        w:"100%",
        bg:'white',
        h:"60%",
        backgroundImage:CardBG1,
        borderRadius:'5px'
    }
    const cardProps2 = {
        w:"100%",
        bg:'white',
        h:"60%",
        backgroundImage:CardBG2,
        borderRadius:'5px'
    }
    const cardProps3 = {
        w:"46%",
        bg:'white',
        h:"67%",
        backgroundImage:CardBG1,
        borderRadius:'5px'

        
    }
    return(
        <Grid   templateColumns='repeat(3, 1fr)' >
            <GridItem  w="100%"  pl={50} pt={443} >
                <Heading  fontWeight={300} fontSize={88} fontFamily="inter" color="#151C26" size='4xl' textStyles='h1'>Consistent Sustainable Growth</Heading>
            </GridItem>
            <Grid   templateRows='repeat(2, 1fr)' gap={4} templateColumns='repeat(2, 1fr)'>
                <GridItem display="flex" alignItems="center" justifyContent="center">
                    <Card cardProps={cardProps2}  />
                </GridItem>
                <GridItem display="flex" alignItems="top" justifyContent="center">
                    <Card cardProps={cardProps} />
                </GridItem>
                <GridItem display="flex" colSpan={2}  alignItems="center" justifyContent="center">
                    <Card cardProps={cardProps3} />
                </GridItem>
            </Grid>
            <GridItem>
                {/* <Image objectFit='cover'  src={im} alt='Dan Abramov' /> */}
            </GridItem>
        </Grid>
    )
}