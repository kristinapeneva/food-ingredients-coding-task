import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { Box, Flex, Text, Button, ButtonGroup, Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputRightAddon
} from "@chakra-ui/react"
import data from './api/post.json'

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
      w="100vw"
      h="100vh"
      m="0"
      bgGradient="linear-gradient(to right top, #555551, #535a4f, #4a6053, #3b655f, #266a70);"
      color="#333333"
      display="flex"
      alignItems="center"
      justifyContent="center"
      >

    {/* Inner box */}
      <Box
        p="50px"
        bgColor="white"
        w="60%"
        h="80%"
        borderRadius="40px"
        display="flex">
        <Box flexGrow="2"
          >
          <FormControl 
            onSubmit={(e) => {
              e.preventDefault(); e.stopPropagation()
              }}
              
          >
            <FormLabel>
              Ingredient Search
            </FormLabel>
            <Input
              type="text" 
              placeholder='Enter ingredient name...'
              onChange={(e) => {
                setIngredient(e.target.value);
                setResponse(null);
              }} 
            />
            <Button
              type='submit' onClick={() => callAPI()}>
                Search
            </Button>
          </FormControl>
          <Box>
            <Text>Results:</Text>
          </Box>
          </Box>
          <Box flexGrow="1">
            <Text>Search History</Text>
          </Box>
      </Box>
      </Box>

  )
}

