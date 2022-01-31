import React from 'react';
import {Grid,GridItem,Box, Heading,Icon} from '@chakra-ui/react'
import {SunIcon,StarIcon} from '@chakra-ui/icons'
export default function ThirdPage(){
    return(
        <Grid templateColumns='repeat(3, 1fr)' h="275px">
            <Box display="flex" alignItems="center" justifyContent="right">
                
                <Heading width={"200px"} color="#133063" textAlign="center" fontWeight={700} fontSize={20} lineHeight={"20px"} fontStyle={"normal"} fontFamily="inter" size='4xl' textStyles='h1'>
                    Whole every miles as tiled at seven best CRMS
                </Heading>
                
            </Box>  
            <GridItem  display="flex" alignItems="center" justifyContent="center">
                <Icon as={SunIcon} color="red.500" borderRadius="50px" border="1px" borderColor={"red.500"}/>            
                <Heading width={"150px"} color="#133063" textAlign="center" fontWeight={500} fontSize={15}  fontStyle={"normal"} fontFamily="inter">
                    Sufficient Impact
                </Heading>
            </GridItem>  
            <GridItem   display="flex" alignItems="center" >
                <Icon as={StarIcon} color="red.500" borderRadius="50px" border="1px" borderColor={"red.500"}/>                
                <Heading width={"150px"} color="#133063" textAlign="center" fontWeight={500} fontSize={15}  fontStyle={"normal"} fontFamily="inter">
                    Synced with CRM
                </Heading>
            </GridItem>  
        </Grid>
    )
}
