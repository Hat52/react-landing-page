import {Box } from '@chakra-ui/react'

export default function Cards({cardProps,bgImage}){
    const {content,bg,w,h,mt,ml} = cardProps
    return(
        <Box bg={bg} borderRadius="10" ml={ml} mt={mt} backgroundImage={bgImage} w={w} h={h}>
            {content}
        </Box>
    )
}