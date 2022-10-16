import { Box, Text, FormControl, Flex } from "@chakra-ui/react";
import InputField from "./InputField";
import SearchButton from "./SearchButton";

const SearchBox = ({ errorState, error, setSearchField, handleSearchOnClick }) => {
    return (
        <>
            <Flex
                flexDirection="column"
                gap="2rem"
                w="100%"
                h="fit-content"
                minh="70vh"
                p="25vh 10vw 10vh 15vw"
                bgGradient='linear(to-b, #00C9B2, #1E6D64, #1B484B)'   
            >
                <Text
                    color="#FFFFFF"
                    fontSize="3rem"
                    fontWeight="600"
                >
                    Search for an ingredient:
                </Text>
                <FormControl 
                    w="100%"
                    // minW="400px"
                    onSubmit={(e) => {
                        e.preventDefault(); e.stopPropagation();
                    }}              
                >
                    <InputField
                        error={ error }
                        errorState={ errorState }
                        setSearchField={ setSearchField }
                    />
                    <SearchButton handleSearchOnClick={ handleSearchOnClick } />
                </FormControl>
            </Flex>
        </>
    )
}

export default SearchBox;