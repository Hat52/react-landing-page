import React from 'react';
import {Grid , GridItem, Text} from '@chakra-ui/react';
export default function CardGrid({Icon,text}){
    return(
        <Grid h="100%" templateRows='repeat(2, 1fr)'>
            <GridItem >
                <Icon w={"48px"} h={"27px"} boxSize={10}  color={"#6B6B6B"} mt={2} ml={2}/>
            </GridItem>
            <GridItem  display="flex" alignItems="center" justifyContent="center">
                <Text  width={"200px"}   color="#87878A" textAlign="left" fontWeight={400} fontSize={12} lineHeight={"15px"} fontStyle={"normal"} fontFamily="inter">
                    {text}
                </Text>
            </GridItem>
        </Grid>
    )
}