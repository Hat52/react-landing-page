import React from 'react';
import {Grid,GridItem} from '@chakra-ui/react'
import ImageCard from '../../Components/Cards/imageCards'
export default function SixthComponent(){
    const cardProps = {
        w:"20vw",
        bg:'white',
        h:"50vh",
        borderSizing:'border-box',
        borderRadius:"12px",
        boxShadow:"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);",
        padding:"8px"
    }
    return (
        <Grid templateColumns='repeat(3, 1fr)'  padding="20px" paddingLeft="5%"  marginLeft="10%" marginRight="10%">
            <GridItem>
                <ImageCard cardProps={cardProps}/>
            </GridItem>
            <GridItem>
            <ImageCard cardProps={cardProps}/>
            </GridItem>
            <GridItem>
            <ImageCard cardProps={cardProps}/>
            </GridItem>
        </Grid>
    )
}