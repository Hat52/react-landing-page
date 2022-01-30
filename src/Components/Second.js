import { Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';
import Card from './Cards/Cards'
import CardBG1 from '../assests/img/Cardbg1.png'
import CardBG2 from '../assests/img/Cardbg2.png'
export default function Second(){
    const cardProps = {
        w:"30%",
        bg:'white',
        h:"30%",
        mt:"-15%",
        

    }
    const cardProps2 = {
        w:"30%",
        bg:'white',
        h:"30%",
        mt:"10%",
        ml:"40%"
    }
    const cardProps3 = {
        w:"30%",
        bg:'white',
        h:"30%",
        mt:"10%",
        ml:"15%"
    }
    return(
        <Grid  h='801px' templateColumns='repeat(3, 1fr)'>
            <GridItem  w="100%" bg='transparent' pl={50} pt={443} >
                <Heading  fontWeight={300} fontSize={88} fontFamily="inter" color="#151C26" size='4xl' textStyles='h1'>Consistent Sustainable Growth</Heading>
            </GridItem>
            <GridItem  bg='transparent' >
                <Card cardProps={cardProps2}  bgImage={CardBG2}/>
                <Card cardProps={cardProps}  bgImage={CardBG1}/>
                <Card cardProps={cardProps3}  bgImage={CardBG1}/>
            </GridItem>
            <GridItem bg='transparent' pr={5}>
                {/* <Image objectFit='cover'  src={im} alt='Dan Abramov' /> */}
            </GridItem>
        </Grid>
    )
}