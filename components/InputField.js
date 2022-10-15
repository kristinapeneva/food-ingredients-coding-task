import { Box, InputGroup, InputLeftElement, Input, Text } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons' 

const InputField = ({ errorState, error, setSearchField }) => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
            >
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="white"
                    >
                        <Search2Icon />
                    </InputLeftElement>        
                    <Input
                        minLength="3"
                        maxLength="20"
                        pattern="[A-Za-z]"
                        errorBorderColor='red'
                        focusBorderColor="#FF8A44"
                        required
                        type="text"
                        fontSize="3xl"
                        color="white"
                        variant="flushed"
                        w="100%"
                        maxW="600px"              
                        onChange={(e) => {
                            setSearchField(e.target.value);
                        }} 
                    />
                    {errorState && <Text color="red">{ error }</Text>}
                </InputGroup>
            </Box>
        </>
    )
}

export default InputField;
