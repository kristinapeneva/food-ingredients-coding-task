import { Box, Text, FormControl } from "@chakra-ui/react";
import InputField from "./InputField";
import SearchButton from "./SearchButton";

const SearchBox = ({errorState, error, setSearchField, handleSearchOnClick}) => {
    return (
        <>
            <Box
                p="25vh 10vw 0 15vw"
                w="100%"
                h="70vh"
                margin="0px"
                c="#DDDBDA"
                bgGradient='linear(to-b, #00C9B2, #1E6D64, #1B484B)'
                display="flex"
                flexDirection="column"
                gap="60px"
                >
                <Text
                    color="white"
                    fontSize="6xl"
                    fontWeight="500"
                >
                    Search for an ingredient:
                </Text>
                <FormControl 
                    w="60vw"
                    minW="400px"
                    onSubmit={(e) => {
                        e.preventDefault(); e.stopPropagation()
                    }}              
                >
                    <InputField error={error} errorState={errorState} setSearchField={setSearchField}/>
                    <SearchButton handleSearchOnClick={handleSearchOnClick}/>
                </FormControl>
            </Box>
        </>
    )
}

export default SearchBox;