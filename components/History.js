import { Box, Text, Button } from "@chakra-ui/react";

const History = ({ searchHistory, handleSearchPrevSearches }) => {
    return (
        <>
            <Box 
                width ="100%"
            >
                <Text 
                    p="15px 0" 
                    fontSize="2xl"
                >
                    Search history:
                </Text>
                <Box 
                    display="flex" 
                    gap="10px" 
                    flexWrap="wrap" 
                    width="100%"
                >
                    {searchHistory && searchHistory.map((history,index) => {
                        return (
                            <Button
                                p="0 20px"
                                size="sm"
                                variant="outline"
                                fontSize="1xl"
                                color="#1B484B"
                                borderColor="#1B484B"
                                _hover={{
                                    borderColor: "#FF9D56",
                                    color: "#FF9D56",
                                    transform: "scale(1.05)"
                                }}
                                _active={{
                                    bg: "#FF9D56",
                                    color: "white",
                                    transform: "scale(0.98)"
                                }}
                                key={`history${index}`} onClick={() => handleSearchPrevSearches(history)}
                            >
                                { history }
                            </Button>)
                        })}
                </Box>
            </Box>
        </>
    )
}

export default History;
