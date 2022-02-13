import {Box,Avatar,Text, GridItem,Divider,extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    components:{
        Divider: {
            backgroundColor:"yellow blue"
        }
    }
})
export default function Cards({cardProps,cardContent}){
    return(
        <Box {...cardProps} display="grid" alignItems="center" templateRows='repeat(4, 1fr)' justifyContent="center" >
            <GridItem display="flex" justifyContent="center">
                <Avatar name={cardContent.name} src={cardContent.src}/>
            </GridItem>
            <GridItem display="flex" justifyContent="center" alignItems="center">
                <Text  width="80%" textAlign="center">
                    {cardContent.text}
                </Text>    
            </GridItem>
            <GridItem display="flex" justifyContent="center" alignItems="center">
                <Divider width="20%" size="lg" borderTop="2px solid blue" orientation='horizontal'/>
                {/* <hr style={{width:"20%",backgroundColor:"blue"}}/> */}
            </GridItem>
            
            <GridItem display="flex" justifyContent="center">
                <Text>{cardContent.post}</Text>    
            </GridItem>
            
            
            
        </Box>
    )
}