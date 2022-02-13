import React from 'react';
import {Grid,GridItem,Text} from '@chakra-ui/react'
import Cards from '../../Components/Cards/Cards';
import CardGrid from '../FourthComponent/CardGrid'
import {MinusIcon} from '@chakra-ui/icons'
export default function FifthComponent(){
    const cardProps = {
        w:"20vw",
        bg:'white',
        h:"50vh",
        borderSizing:'border-box',
        borderRadius:"12px",
        boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        padding:"8px"
    }
    return(
        <Grid templateRows='repeat(3, 1fr)' templateColumns='repeat(3, 1fr)' h="auto">
            <GridItem display="flex" alignItems='center' justifyContent="center" rowSpan='2'>
                <Cards cardProps={cardProps}>
                    <CardGrid Icon={MinusIcon}  width={"100%"} text={"Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be."}/>        
                </Cards>
            </GridItem>
            <GridItem display="flex" alignItems='center' justifyContent="center" rowSpan='2' >
                <Cards cardProps={cardProps} >
                    <CardGrid Icon={MinusIcon} width={"100%"} text={"Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be."}/>        
                </Cards>
            </GridItem>
            <GridItem display="flex" alignItems='center' justifyContent="center" rowSpan='2'>
                <Cards cardProps={cardProps} >
                    <CardGrid Icon={MinusIcon} width={"100%"} text={"Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be."}/>        
                </Cards>
            </GridItem>
            <GridItem display="flex" alignItems="center"  justifyContent="center">
                <Text  width={"250px"}   color="#133063" textAlign="center" fontWeight={500} fontSize={15} lineHeight={"20px"} fontStyle={"normal"} fontFamily="inter">
                    Daily New Followers
                </Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" justifyContent="center">
                <Text  width={"250px"}   color="#133063" textAlign="center" fontWeight={500} fontSize={15} lineHeight={"20px"} fontStyle={"normal"} fontFamily="inter">
                    Daily New Impressions
                </Text>
            </GridItem>
            <GridItem display="flex" alignItems="center"  justifyContent="center">
                <Text  width={"250px"}   color="#133063" textAlign="center" fontWeight={500} fontSize={15} lineHeight={"20px"} fontStyle={"normal"} fontFamily="inter">
                    Daily New Leads
                </Text>
            </GridItem>
        </Grid>
        
    )
}