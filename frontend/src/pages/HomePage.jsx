import { Container, VStack,Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

export default function HomePage() {
    const {fetchProducts,products} = useProductStore();

    useEffect(()=>{
        fetchProducts();
    },[fetchProducts]);

    console.log(products);
    
  return (
    <Container maxW="Container.xl" py={12}>
        <VStack spacing={8}>
            <Text fontSize={"30"}
                fontWeight={"bold"}
                bgGradient={"linear(to-r,cyan.400,blue.500)"}
                bgClip={"text"}
                textAlign={"center"}>
                    Current Products
            </Text>
            
            <SimpleGrid columns={{
                base:1,
                md:2,
                lg:3
            }}
            spacing={10}
            w={"full"}>

                {products.map((product) => {
                    return(<ProductCard key={product._id} {...product} />
                )})}
            </SimpleGrid>



            {products.length ===0 && (
                <Text fontSize='xl' textAlign={"center"} fontWeight={'bold'} color='gray.500'>
                No Products Found {" "}
                <Link to={"/create"}>
                  <span style={{ color: "#3182ce", textDecoration: "underline", cursor: "pointer" }}>
                    Create a Product
                  </span>
                </Link>
            </Text>
            )}

        </VStack>
        
    </Container>
  )
}
