import { Box, Flex } from "@chakra-ui/react";
import History from "./History";
import Results from "./Results";

const ResultsAndHistoryBox = ({ getNoResultMessage, inputWordState, response, searchHistory, handleSearchPrevSearches }) => {
    return (
        <>
            <Flex
                width="100%"
                flexDirection="column"
                gap="2rem"
                p="5vh 10vw 10vh 15vw"                
                bgColor="#FBFBFB"                
            >
                <History
                    searchHistory={ searchHistory }
                    handleSearchPrevSearches={ handleSearchPrevSearches }
                />
                <Results
                    getNoResultMessage={ getNoResultMessage }
                    inputWordState={ inputWordState }
                    response={ response }
                />
            </Flex>
        </>
    )
}

export default ResultsAndHistoryBox;
