import { Box } from "@chakra-ui/react";
import History from "./History";
import Results from "./results";

const ResultsAndHistoryBox = ({ getNoResultMessage, inputWordState, response, searchHistory, handleSearchPrevSearches }) => {
    return (
        <>
            <Box
                p="5vh 10vw 10vh 15vw"
                m="0"
                width="100%"
                bgColor="#fbfbfb"
                display="flex"
                flexDirection="column"
                gap="40px"
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
            </Box>
        </>
    )
}

export default ResultsAndHistoryBox;
