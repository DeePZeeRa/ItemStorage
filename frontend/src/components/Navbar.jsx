import { Container, Flex,Text, HStack, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";
// import { IoCreateSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'

 
function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode();
   

  return (
    <Container maxW={"1500px"} px={4} bg={useColorModeValue("orange.200","gray.700")}>
        <Flex height={16} justifyContent={'space-between'} flexDir={{
            base: 'column',
            sm:'row'
        }}> 

            <Text
            bgGradient='linear(to-l,rgb(217, 69, 0),rgb(0, 124, 146))'
            bgClip={'text'}
            fontSize={{base:"22",sm:"34"}}
            fontWeight={"extrabold"}
            >
            <Link to={"/"} ><i>ItemStorage</i></Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                    <FaSquarePlus />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light"?"☀️":"🌙"}
                </Button>
            </HStack>

        </Flex>
      
    </Container>
  )
}

export default Navbar;
