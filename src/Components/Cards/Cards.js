import {Box } from '@chakra-ui/react'

export default function Cards({cardProps,children}){
    console.log(children)
    return(
        <Box {...cardProps} >
            {children}
        </Box>
    )
}