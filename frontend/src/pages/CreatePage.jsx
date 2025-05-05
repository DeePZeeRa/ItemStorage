import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'; // Add this import

function CreatePage() {
    const [newProduct,setNewProduct] = useState({
        name:"",
        price:"",
        image:"",
        info:""

    });
    const toast = useToast();
    const {createProduct}=useProductStore()

    const handleAddProduct = async() =>{
        const {success,message}=await createProduct(newProduct)
        console.log(success,message);
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error",
                isClosable:true,
            })
        }else{
            toast({
                title:"Success",
                description:message,
                status:"success",
                isClosable:true,
            })
        }
        setNewProduct({name:"",price:"",image:"",info:""}) // reset the state
    }
  return (
    <Container maxW={'container.sm'}>
        <VStack spacing={8}>
            <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8} >
                Create New Product
            </Heading>

            <Box w={"full"} bg={useColorModeValue("white","gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                <VStack spacing={4}>
                    <Input placeholder='Product Name' name='name' value={newProduct.name} onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}/>
                    <Input placeholder='Price' name='price' value={newProduct.price} onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}/>
                    <Input placeholder='Image URL' name='image' value={newProduct.image} onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}/>
                    
                    <Textarea 
                    placeholder='Add Details (optional)' 
                    name='info' 
                    value={newProduct.info} 
                    onChange={(e) => setNewProduct({ ...newProduct, info: e.target.value })} 
                    resize="vertical" // Allows resizing vertically
                    minHeight="150px" // Sets a larger default height
                    />
                
                <Button colorScheme='blue' onClick={handleAddProduct} w = 'full' ><b>Add Product</b></Button>

                </VStack>
            </Box>
        </VStack>
      
    </Container>
  )
}

export default CreatePage;
