import { Box, Text, Button, Flex } from "@chakra-ui/react";

const History = ({ searchHistory, handleSearchPrevSearches }) => {
    return (
        <>
            <Box 
                width ="100%"
            >
                <Text 
                    p="1rem 0" 
                    fontSize="1.5rem"
                    fontWeight="450"
                >
                    Search history:
                </Text>
                <Flex
                    gap="0.5rem" 
                    flexWrap="wrap" 
                >
                    {searchHistory && searchHistory.map((history,index) => {
                        return (
                            <Button
                                fontSize="1rem"
                                fontWeight="450"
                                p="0.25rem 1.5rem"                                
                                color="#FFFFFF"
                                border="2px solid #4a8a83"
                                bgGradient='linear(to-b, #347b73, #1E6D64)'
                                boxShadow="0px 0px 5px 1px #b0afae"
                                _hover={{
                                    borderColor: "#FF9D56",
                                    color: "#FF9D56",
                                    transform: "scale(1.05)",
                                    background: "#FFFFFF"
                                }}
                                _active={{
                                    bg: "#FF9D56",
                                    color: "#FFFFFF",
                                    transform: "scale(0.98)"
                                }}
                                key={`history${index}`} onClick={() => handleSearchPrevSearches(history)}
                            >
                                { history }
                            </Button>)
                        })}
                </Flex>
            </Box>
        </>
    )
}

export default History;
