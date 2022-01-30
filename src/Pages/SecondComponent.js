import React from 'react';
import {Grid,GridItem} from '@chakra-ui/react'
import bgImage from '../assests/img/Image.png'
import bgImage2 from '../assests/img/image2.png'
export default function SecondComponent(){
    return(
        <Grid h="648px" pl="15%" pr="15%" templateColumns='repeat(2, 1fr)' >
            <GridItem  backgroundImage={bgImage2} >
            </GridItem>
            <GridItem backgroundImage={bgImage} >
            </GridItem>  
        </Grid>
    )
}