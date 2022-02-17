import {Grid, GridItem,Button, Heading, Text,Stack, Input  } from '@chakra-ui/react';
import React from 'react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
export default function EightComponent(){
    return(
        <Grid templateColumns='repeat(4, 1fr)' h="509px"> 
            <GridItem display="flex" alignItems='center'  justifyContent="center" colSpan={4}>
                <Button bg='#279BDD' size='lg' w="180px" h ="48px">
                    Get Started
                </Button>
            </GridItem>
            <GridItem display="flex" alignItems='center'  justifyContent="right" >
                <Grid templateColumns='repeat(1, 1fr)' gap={6}>
                    <GridItem>
                        <Heading as="h6" size="xs"> GND Growth</Heading>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                            Though wished merits or be. Alone visit use these smart rooms ham
                        </Text>
                    </GridItem>
                    <GridItem>
                    <Stack spacing={6} direction="row">
                        <AddIcon color={"#279BDD"}/>
                        <PhoneIcon color={"#279BDD"}/>
                        <WarningIcon color={"#279BDD"}/>
                    </Stack>
                    </GridItem>
                    
                </Grid>
            </GridItem>
            <GridItem  display="flex" alignItems='center'  justifyContent="center">
                <Grid templateColumns='repeat(1, 1fr)' gap={6}>
                <GridItem>
                        <Heading as="h6" size="xs"> Resources</Heading>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                        Our Process
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                        Member Stories
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                            Video
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                         Free trial
                        </Text>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem  display="flex" alignItems='center'  justifyContent="center">
                <Grid templateColumns='repeat(1, 1fr)' gap={6}>
                <GridItem>
                        <Heading as="h6" size="xs"> Company</Heading>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                        Patnerships
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                        Terms of use
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                        Privacy
                        </Text>
                    </GridItem>
                    <GridItem>
                        <Text color={"#7A7A7E"} w="270px" fontSize={"16px"}>
                        Sitemap
                        </Text>
                    </GridItem>
                   
                </Grid>
            </GridItem>
            <GridItem  display="flex" alignItems='center'  justifyContent="left">
                <Grid templateColumns='repeat(1, 1fr)' gap={6}>
                <GridItem>
                        <Heading as="h6" size="xs"> Get in Touch</Heading>
                    </GridItem>
                    <GridItem>
                    <Input placeholder='Email' />
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem display="flex" alignItems='center'  justifyContent="center" colSpan={4}>
                <Text color={"#C2C2C2"} w="290px" fontSize={"14px"}>
                Copyright arshakir.com, All rights reserved.
                </Text>
            </GridItem>
        </Grid>
    )
}