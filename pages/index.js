import { inputValidation, isInDatabase, trimAndLowerCaseStr } from '../utils/utils';
import "@fontsource/poppins";
import ResultsAndHistoryBox from '../components/ResultsAndHistoryBox';
import SearchBox from '../components/SearchBox';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { Box, Text } from "@chakra-ui/react"

export default function Home() {
  const [searchField, setSearchField] = useState("");
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [errorState, setErrorState] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [fullHistory, setFullHistory] = useState([]);
  const [inputWordState, setInputWordState] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const getNoResultMessage = () => {
    if (searchHistory.length === 0) {
      return null;
    } else if(inputValidation(inputWordState).isInvalid) {
        return (<Text>There are no results for invalid input.</Text>);
    } else if (response && response.length === 0) {
        return (<Text>No results. Try again.</Text>);
      }
    return;
  }
 
  const handleSearchOnClick = () => {
    setError(null);
    setErrorState(false);
    var inputWord = trimAndLowerCaseStr(searchField);
    setInputWordState(inputWord);
    addSearchHistoryButton(inputWord);
    if(inputValidation(inputWord).isInvalid) {
      setError(inputValidation(inputWord).errorMessage);
      setErrorState(true);
      setResponse([]);
    } else if (isInDatabase(inputWord, fullHistory).isInDb) {
      setResponse(isInDatabase(inputWord, fullHistory).readyResponse);
    } else {
      callAPI(inputWord);
    }
  }

  const handleSearchPrevSearches = (history) => {
    setInputWordState(history);
    setResponse(isInDatabase(history, fullHistory).readyResponse);
  }

  const addSearchHistoryButton = (str) => {
    if(searchHistory.length < 10) {
      setSearchHistory([str, ...searchHistory]);
    } else {
      setSearchHistory([str, ...searchHistory.slice(0, 9)]);
    }
  }

const callAPI = async (str) => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/food/ingredients/search?query=${str}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setResponse(data.results);
      setFullHistory([...fullHistory, {name: str, response: data.results}]);
    } catch (e) {
      setFullHistory([...fullHistory, {name: str, response: []}]);
      setResponse([]);
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
        <SearchBox
          error={ error }
          errorState={ errorState }
          setSearchField={ setSearchField }
          handleSearchOnClick={ handleSearchOnClick }
        />
        <ResultsAndHistoryBox
          getNoResultMessage={ getNoResultMessage }
          inputWordState={ inputWordState }
          response={ response }
          searchHistory={ searchHistory }
          handleSearchPrevSearches={ handleSearchPrevSearches }
        />
      </Box>
    </>
  ) ;
}


