import { 
    Box, 
    Heading, 
    HStack, 
    IconButton, 
    Image, 
    Text, 
    useColorModeValue, 
    useToast, 
    useDisclosure, 
    Button // <-- Add this import
} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md';
import { useProductStore } from '../store/product';
import { FaInfo } from "react-icons/fa6";
// import EditIcon from '@chakra-ui/react'
// import DeleteIcon from '@chakra-ui/react'

export default function ProductCard({_id,name,price,image,info}) {
    const textColor = useColorModeValue("black","gray.200");
    const bg = useColorModeValue("gray.300","black")
    const {deleteProduct} = useProductStore(); 
    const toast = useToast();


    const { isOpen, onOpen, onClose } = useDisclosure()


    const handleDelete = async(pid) =>{
        const {success,message} = await deleteProduct(pid);
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error",
                duration:3000,
                isClosable:true,
            })
        }else{
            toast({
                title:"Success",
                description:message,
                status:"success",
                isClosable:true,
                duration:3000,
            })
        }

    }
  return (
    <Box shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{transform:"translateY(-5px)", shadow:"xl"}} bg={bg}>
    <Image 
        src={image||"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} 
        alt={name} 
        w="full" 
        h={48} 
        objectFit="contain" 
        bg="white" 
    />
    
    <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
            {name}
        </Heading>
        <Text fontWeight='bold' fontSize='xl' color='red' as='kbd' mb={4}>Rs {price}
        </Text>
        <HStack spacing={2}>
            <IconButton icon={<FaInfo />} colorScheme='blue' onClick={onOpen} />
            <IconButton icon={<MdDelete />} colorScheme='red' onClick={() => handleDelete(_id)} />
        </HStack>
    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {info}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Box>
  )
}
