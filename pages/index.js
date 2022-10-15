import Head from 'next/head'
import { inputValidation, isInDatabase, trimAndLowerCaseStr } from '../utils/utils';
import ResultsAndHistoryBox from '../components/ResultsAndHistoryBox';
import SearchBox from '../components/SearchBox';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { Box, Text } from "@chakra-ui/react"

export default function Home() {
  const [searchField, setSearchField] = useState("");
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [errorState, setErrorState] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])
  const [fullHistory, setFullHistory] = useState([])
  const [inputWordState, setInputWordState] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const getNoResultMessage = () => {
    if (searchHistory.length === 0) {
      return null;
    } else if(inputValidation(inputWordState).isInvalid) {
        return (<Text>There are no results for invalid input.</Text>)
    } else if (response && response.length === 0) {
        return (<Text>No results. Try again.</Text>)
      }
    
  }
 
  const handleSearchOnClick = () => {
    setError(null);
    setErrorState(false)
    var inputWord = trimAndLowerCaseStr(searchField)
    setInputWordState(inputWord)

    addSearchHistoryButton(inputWord)
    if(inputValidation(inputWord).isInvalid) {
      setError(inputValidation(inputWord).errorMessage)
      setErrorState(true)
      setResponse([])
    } else if (isInDatabase(inputWord, fullHistory).isInDb) {
      setResponse(isInDatabase(inputWord, fullHistory).readyResponse)
    } else {
      callAPI(inputWord);
    }
  }

  const handleSearchPrevSearches = (history) => {
    setInputWordState(history)
    setResponse(isInDatabase(history, fullHistory).readyResponse)
  }

  const addSearchHistoryButton = (str) => {
    if(searchHistory.length < 10) {
      setSearchHistory([str, ...searchHistory])
    } else {
      setSearchHistory([str, ...searchHistory.slice(0, 9)])
    }
  }

const callAPI = async (str) => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/food/ingredients/search?query=${str}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setResponse(data.results);

      // add response to full search history
      setFullHistory([...fullHistory, {name: str, response: data.results}])

    } catch (e) {
      setFullHistory([...fullHistory, {name: str, response: []}])
      setResponse([])
    }
  }

  return (
    <>
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
        <SearchBox error={error} errorState={errorState} setSearchField={setSearchField} handleSearchOnClick={handleSearchOnClick} />
        <ResultsAndHistoryBox getNoResultMessage={getNoResultMessage} inputWordState={inputWordState} response={response} searchHistory={searchHistory} handleSearchPrevSearches={handleSearchPrevSearches}/>
      </Box>
    </>
  )



  // colors: brown: #985D06, #937661, black: #100D08, blue: #266A70, #1B484B, gray: #DDDBDA, #555551
  // navy blue colors #171A4A #00C5D5 #E8D5B5 #FAF8FF #434075 #F1F1E6
//   return (
//     // Wrapper Box
//     <Box
//     className='container'
//       h="fit-content"
//       minH="100vh"
//       m="0"
//       p="0"
//       color="#333333"
//       display="flex"
//       flexDirection="column"
      
//       >

//     {/* search box*/}
//       <Box
//         p="25vh 10vw 0 15vw"
//         w="100%"
//         h="70vh"
//         margin="0px"
//         c="#DDDBDA"
//         bgGradient='linear(to-b, #00C9B2, #1E6D64, #1B484B)'
//         display="flex"
//         flexDirection="column"
//         gap="60px">
//           <Text
//             color="white"
//             fontSize="6xl"
//             fontWeight="500"
            
//             >Search for an ingredient:</Text>
//           <FormControl 
//           w="60vw"
//           minW="400px"
//             onSubmit={(e) => {
//               e.preventDefault(); e.stopPropagation()
//               }}              
//           >
//             <Box
//               display="flex"
//               flexDirection="column"
//               >
//               <InputGroup>
//               <InputLeftElement
//                 pointerEvents="none"
//                 color="white"
//                 >
//                   <Search2Icon />
//                 </InputLeftElement>
        
//             <Input
//               minLength="3"
//               maxLength="20"
//               pattern="[A-Za-z]"
//               errorBorderColor='red'
//               focusBorderColor="#FF8A44"
//               required
//               type="text"
//               fontSize="3xl"
//               color="white"
//               variant="flushed"
//               w="100%"
//               maxW="600px"
              
//               onChange={(e) => {
//                 setSearchField(e.target.value);
//               }} 
//             />
//             {errorState && <Text color="red">{error}</Text>}
              
//             </InputGroup>
            
//             <Button
//             w="fit-content"
//             maxW="300px"
//             color="#1B484B"
//             bgGradient="linear-gradient(to-t,#FF8A44, #FF9D56)"
//             h="fit-content"
//             fontSize="1xl"
//             p="15px 45px"
//             border="2px solid #FF9D56"
//             _hover={{ border: "2px solid white", transform: "scale(1.05)", color:"white"}}

//               type='submit' onClick={() => handleSearchOnClick()} >
//                 <ArrowRightIcon />
//             </Button>
//             </Box>
//             </FormControl>
//         </Box>


//           <Box
//                   p="5vh 10vw 10vh 15vw"
//                   m="0"
//                   width="100%"
//                   bgColor="#fbfbfb"
//                   display="flex"
//                   flexDirection="column"
//                   gap="40px"
//           >
//             {/* <Results /> */}
//             <Box width ="100%">
//               <Text p="15px 0" fontSize="2xl">Search history:</Text>
//               <Box display="flex" gap="10px" flexWrap="wrap" width="100%">
//               {searchHistory && searchHistory.map((history,index) => {
//                 return(
//                 <Button
//                   p="0 20px"
//                   size="sm"
//                   variant="outline"
//                   fontSize="1xl"
//                   color="#1B484B"
//                   borderColor="#1B484B"
//                   _hover={{borderColor: "#FF9D56", color: "#FF9D56", transform: "scale(1.05)"}}
//                   _active={{bg: "#FF9D56", color: "white", transform: "scale(0.98)"}}
//                   key={`history${index}`} onClick={() => handleSearchPrevSearches(history)}>
//                     {history}
//                     </Button>)
//               })}
//               </Box>
//             </Box>

// <Box
//         width="60%"
//         display="flex"
//         flexDirection="column"
//         >
//             <Text 
//                 fontSize="4xl"
//                 fontWeight="700"
//                 textColor="#FF8A44"
//                 >Results{inputWordState && ` for ${inputWordState}:`}</Text>
//             <Box
//                 width="100%"
//                 height="fit-content"
//                 display="flex"
//                 flexDirection="column"
//             >             
//             {(response && response.length > 0) ? response.map(x => {
//                   return (
//                     <Box 
//                     key={x.id}
//                     width="100%"
//                     display="flex"
//                     gap="20px"
//                     boxShadow="0px 0px 20px 7px #DDDBDA"
//                     m="10px 0px"
//                     borderRadius="15px"
//                     bg="white"
//                     padding="30px">
//                       <Image src={`https://spoonacular.com/cdn/ingredients_100x100/${x.image}`} width="100px" height="100px" alt={x.name}></Image>
//                       <Text fontSize="2xl" margin="auto 0" padding="10px" fontWeight="350" textColor="#1B484B">{x.name}</Text>                      
//                     </Box>
//                   )
//                 }) : getNoResultMessage()}
                
//             </Box>

//             </Box>            
//         </Box>
            
//         </Box>
// )
      
  
  
}



