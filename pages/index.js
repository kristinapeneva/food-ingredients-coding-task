import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { Box, Flex, Text, Button, ButtonGroup, Input,

  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputRightAddon,
  InputGroup,
  InputLeftElement,
  Container
} from "@chakra-ui/react"
import { Search2Icon, ArrowRightIcon} from '@chakra-ui/icons'
import data from './api/post.json'
import { transform } from 'framer-motion';

export default function Home({results}) {
  const [ingredient, setIngredient] = useState(null);
  const [response, setResponse] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  console.log(apiKey);


const callAPI = async () => {
    
    try {
      const res = await fetch(
        `https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&apiKey=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }


  // colors: brown: #985D06, #937661, black: #100D08, blue: #266A70, #1B484B, gray: #DDDBDA, #555551
  return (
    // Wrapper Box
    <Box
    className='container'
      w="100vw"
      h="fit-content"
      minH="100vh"
      m="0"
      color="#333333"
      display="flex"
      flexDirection="column"
      
      >

    {/* search box*/}
      <Box
        p="20vh 15vw"
        w="100vw"
        h="70vh"
        m="0"
        c="#DDDBDA"
        bgGradient='linear(to-t, #00C9B2, #1E6D64, #1B484B)'
        display="flex"
        flexDirection="column"
        gap="60px">
          <Text
            color="white"
            fontSize="6xl"
            fontWeight="500"
            
            >Search for ingredients:</Text>
          <FormControl 
          w="60vw"
          minW="400px"
            onSubmit={(e) => {
              e.preventDefault(); e.stopPropagation()
              }}              
          >
            <Box
              display="flex"
              flexDirection="column"
              gap="40px">
              <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon></Search2Icon>}
                color="white"
                >

                </InputLeftElement>
            <Input
              
              focusBorderColor="#ffaa87"
              fontSize="3xl"
              focus
              color="white"
              type="text" 
              variant="flushed"
              w="100%"
              maxW="600px"
          
              onChange={(e) => {
                setIngredient(e.target.value);
                setResponse(null);
              }} 
            />
            </InputGroup>
            <Button
            w="fit-content"
            maxW="300px"
            color="#1B484B"
            bgGradient="linear-gradient(to-t,#D27955, #ffaa87)"
            h="fit-content"
            fontSize="1xl"
            p="15px 45px"
            border="1px solid #ffaa87"
            _hover={{ border: "1px solid white", transform: "scale(1.05)", color:"white"}}

              type='submit' onClick={() => callAPI()}>
                <ArrowRightIcon />
            </Button>
            </Box>
            </FormControl>
        </Box>


          <Box
          >
            <Box>
              <Text>Results:</Text>
            </Box>
         
          <Box flexGrow="1">
            <Text>Search History</Text>
          </Box>
      </Box>
      </Box>

  )
}

