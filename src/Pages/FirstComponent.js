import React from 'react';
import FirstComponent from '../Components/index';
import { Grid, GridItem, Heading } from '@chakra-ui/react';
export default function main(){
    return(
        <React.Fragment>
            <FirstComponent/>
            <Grid  h='322px' ml="213px" mr="213px" templateRows='repeat(2, 1fr)'>
                <GridItem pl={"20%"} pr={"20%"} pt={10}>
                    <Heading width={"80%"} color="#133063" textAlign="center" fontWeight={700} fontSize={30} fontFamily="inter" size='4xl' textStyles='h1'>
                        Questions explained agreeable preferred strangers too him her son
                    </Heading>
                </GridItem>
                <Grid  templateColumns='repeat(3, 1fr)' pt={10}>
                    <GridItem >
                    <Heading width={"80%"} color="#133063" textAlign="center" fontWeight={700} fontSize={30} fontFamily="inter" size='4xl' textStyles='h1'>
                        100+
                    </Heading>
                    </GridItem>
                    <GridItem>
                    <Heading width={"80%"} color="#133063" textAlign="center" fontWeight={700} fontSize={30} fontFamily="inter" size='4xl' textStyles='h1'>
                        43,000+
                    </Heading>
                    </GridItem>
                    <GridItem >
                    <Heading width={"80%"} color="#133063" textAlign="center" fontWeight={700} fontSize={30} fontFamily="inter" size='4xl' textStyles='h1'>
                        30+
                    </Heading>
                    </GridItem>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}