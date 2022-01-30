import { VStack } from '@chakra-ui/react';
import React from 'react';
import First from './First'
import Second from './Second'
export default function FirstComponent(props) {
    return(
        <div style={{backgroundColor:'#7ACAE5'}}>
            <VStack> 
                <First/>
                <Second/>
            </VStack>
        </div>
    )
}