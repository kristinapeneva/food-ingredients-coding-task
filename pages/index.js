import Head from 'next/head'
import { useMemo } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Results from '../components/results';
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
  const [searchField, setsearchField] = useState(null);
  const [ingredient, setIngredient] = useState(null)
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([])

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const callAPI = async () => {
    setIngredient(searchField);
    try {
      const res = await fetch(
        `https://api.spoonacular.com/food/searchFields/search?query=${ingredient}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setResponse(data.results)
        console.log(data);
        console.log(response);
    } catch (e) {
      setError(e);
    }
  }


  const searchHistoryImplementation = () => {
    if(searchHistory.length < 10) {
      setSearchHistory([...searchHistory, searchField])
    } else {
      setSearchHistory([...searchHistory.slice(1),searchField])
    }
  }

  const handleSearchPrevSearches =(index) => {
    setsearchField(searchHistory[index])
  }


  // getting images


  // colors: brown: #985D06, #937661, black: #100D08, blue: #266A70, #1B484B, gray: #DDDBDA, #555551
  // navy blue colors #171A4A #00C5D5 #E8D5B5 #FAF8FF #434075 #F1F1E6
  return (
    // Wrapper Box
    <Box
    className='container'
      h="fit-content"
      minH="100vh"
      m="0"
      p="0"
      color="#333333"
      display="flex"
      flexDirection="column"
      
      >

    {/* search box*/}
      <Box
        p="25vh 10vw 0 15vw"
        w="100%"
        h="70vh"
        margin="0px"
        c="#DDDBDA"
        bgGradient='linear(to-b, #00C9B2, #1E6D64, #1B484B)'
        display="flex"
        flexDirection="column"
        gap="60px">
          <Text
            color="white"
            fontSize="6xl"
            fontWeight="500"
            
            >Search for searchFields:</Text>
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
              
              focusBorderColor="#FF8A44"
              fontSize="3xl"
              color="white"
              type="text" 
              variant="flushed"
              w="100%"
              maxW="600px"
          
              onChange={(e) => {
                setsearchField(e.target.value);
              }} 
            />
            </InputGroup>
            <Button
            w="fit-content"
            maxW="300px"
            color="#1B484B"
            bgGradient="linear-gradient(to-t,#FF8A44, #FF9D56)"
            h="fit-content"
            fontSize="1xl"
            p="15px 45px"
            border="2px solid #FF9D56"
            _hover={{ border: "2px solid white", transform: "scale(1.05)", color:"white"}}

              type='submit' onClick={() => {searchHistoryImplementation()}} >
                <ArrowRightIcon />
            </Button>
            </Box>
            </FormControl>
        </Box>


          <Box
                  p="10vh 10vw 10vh 15vw"
                  m="0"
                  width="100%"
                  bgColor="#fbfbfb"
                  
          >
            {/* <Box>
              <Text>Results:</Text>
                {response && response.map(x => {
                  return (
                    <Box key={x.id}>
                      <Text>{x.name}</Text>
                      <Image src={`https://spoonacular.com/cdn/searchFields_100x100/${x.image}`} width="100px" height="100px"></Image>
                    </Box>
                  )
                }
                  
                )}
            </Box> */}

<Box
        width="60%"
        display="flex"
        flexDirection="column"
        >
            <Text 
                fontSize="4xl"
                fontWeight="700"
                textColor="#FF8A44"
                >Results:</Text>
            <Box
                width="100%"
                height="fit-content"
                display="flex"
                flexDirection="column"
            >             
                <Box
                    width="100%"
                    display="flex"
                    gap="20px"
                    boxShadow="0px 0px 20px 7px #DDDBDA"
                    m="10px 0px"
                    borderRadius="15px"
                    bg="white"
                    padding="30px"
                >                    
                    <Image src="https://spoonacular.com/cdn/searchFields_100x100/banana-chips.jpg" alt="banana chips" width="100px" height="100px"></Image>
                    <Text fontSize="2xl" margin="auto 0" padding="10px" fontWeight="350" textColor="#1B484B">Banana chips</Text>
                </Box>
                <Box
                    width="100%"
                    minW="600px"
                    display="flex"
                    gap="20px"
                    m="10px 0px"
                    borderRadius="15px"
                    boxShadow="0px 0px 20px 7px #DDDBDA"
                    bg="white"
                    padding="30px"
                >                    
                    <Image src="https://spoonacular.com/cdn/searchFields_100x100/banana-blossoms.jpg" alt="banana blossoms" width="100px" height="100px"></Image>
                    
                    <Text fontSize="2xl" margin="auto 0" padding="10px" fontWeight="350" textColor="#1B484B">Banana blossoms</Text>
                </Box>     
            </Box>            
        </Box>
            {/* <Results /> */}
            <Box width ="100%" >
              <Text>Search History</Text>
              <Box display="flex" flexDirection="row-reverse">
              {searchHistory && searchHistory.map((history,index) => {
                return(<Button key={`history${index}`} onClick={() => handleSearchPrevSearches(index)}>{history}</Button>)
              })}
              </Box>
            </Box>
        </Box>
      </Box>

  )
}



