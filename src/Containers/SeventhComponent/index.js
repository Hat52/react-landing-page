import React from 'react'
import {Grid,GridItem,Image} from '@chakra-ui/react'
import chaseIcon from '../../assests/img/chase.svg'
import asanaIcon from '../../assests/img/assana.svg'
import googleIcon from '../../assests/img/google.svg'
import buzzIcon from '../../assests/img/buzz.svg'
import walmartIcon from '../../assests/img/walmart.svg'
export default function SeventhComponent(){
    return (
        <Grid templateColumns='repeat(5, 1fr)' paddingLeft='10%' marginTop='5%'>
            <GridItem>
                <Image width={"137px"} height={"25.46px"} src={chaseIcon} alt='Dan Abramov' />
            </GridItem>
            <GridItem>
                <Image width={"137px"} height={"25.46px"} src={asanaIcon} alt='Dan Abramov' />
            </GridItem>
            <GridItem>
                <Image width={"137px"} height={"25.46px"} src={googleIcon} alt='Dan Abramov' />
            </GridItem>
            <GridItem>
                <Image width={"137px"} height={"25.46px"} src={buzzIcon} alt='Dan Abramov' />
            </GridItem>
            <GridItem>
                <Image width={"137px"} height={"25.46px"} src={walmartIcon} alt='Dan Abramov' />
            </GridItem>
        </Grid>
    )
}