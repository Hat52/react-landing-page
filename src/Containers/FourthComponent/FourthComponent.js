import React from 'react';
import { Grid, Text, GridItem,Icon,Button} from '@chakra-ui/react';
import {CheckIcon,HamburgerIcon,SettingsIcon,WarningIcon,TimeIcon} from '@chakra-ui/icons'
import Card from '../../Components/Cards/Cards'
import CardGrid from './CardGrid'
export default function FourthComponent(){
    const cardProps = {
        w:"250px",
        bg:'white',
        h:"260px",
        borderSizing:'border-box',
        borderRadius:"12px",
        boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"
        
    }
    return(
        <Grid templateColumns='repeat(4, 1fr)' gap={4} h="800px" templateRows='repeat(2, 1fr)'>
            <GridItem display="flex"   alignItems="center" justifyContent="center" templateRows='repeat(2, 1fr)' rowSpan={2} colSpan={2}>
                <GridItem display="grid" gap={4}>
                    <GridItem display="flex" alignItems="center"  justifyContent="center" >
                        <Text  width={"320px"}   color="#133063" textAlign="left" fontWeight={500} fontSize={15} lineHeight={"20px"} fontStyle={"normal"} fontFamily="inter">
                            Paystack helps businesses in Africa get paid by anyone, anywhere in the
                            world
                        </Text>
                    </GridItem>
                    <GridItem  display="flex" alignItems="top" justifyContent="center">
                        <Icon as={CheckIcon} color="white"  borderRadius="50px" backgroundColor="#4D46C7" w={10}/>
                        <Text  width={"250px"}   color="#133063" textAlign="center" fontWeight={500} fontSize={15} lineHeight={"20px"} fontStyle={"normal"} fontFamily="inter">
                            Image bearing he dominion
                        </Text>
                    </GridItem>
                    <GridItem  display="flex" alignItems="top" justifyContent="center">
                        <Icon as={CheckIcon} color="white" backgroundColor="#4D46C7" borderRadius="50px" w={10}/>
                        <Text  width={"250px"}   color="#133063" textAlign="center" fontWeight={500} fontSize={15} lineHeight={"20px"} fontStyle={"normal"} fontFamily="inter">
                            Whose sea dominion had closed
                        </Text>
                    </GridItem>
                    <GridItem  display="flex" alignItems="center" justifyContent="left">
                        <Button  w="200px" h="62px" bg="#161C28" borderRadius="25px" colorScheme='blue'>Get started</Button>
                    </GridItem>
                </GridItem>
            </GridItem>
            <GridItem display="flex" alignItems="center" justifyContent="center">
                <Card cardProps={cardProps} >
                    <CardGrid Icon={HamburgerIcon} text={"It it saying you're created creepeth."}/>
                </Card>
                
            </GridItem>
            <GridItem  display="flex" alignItems="center" justifyContent="center" >
                <Card cardProps={cardProps} >
                    <CardGrid Icon={TimeIcon} text="likeness god him fly fourth green his their great."/>
                </Card>
            </GridItem>
            <GridItem  display="flex" alignItems="top" justifyContent="center" >
                <Card cardProps={cardProps} >
                    <CardGrid Icon={SettingsIcon} text="Fruit let green heaven Day. Also they're third."/>
                </Card>
            </GridItem>
            <GridItem  display="flex" alignItems="top" justifyContent="center" >
                <Card cardProps={cardProps} >
                    <CardGrid Icon={WarningIcon} text="Hath creeping waters stars sixth divided seasons."/>
                </Card>
            </GridItem>
        </Grid>
    )
}