import { Box, InputGroup, InputLeftElement, Input, Text } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons' 

const InputField = ({ errorState, error, setSearchField }) => {
    return (
        <>
            <InputGroup
                display="flex"
                flexDirection="column"
                minH="4.5rem"
            >                    
                <InputLeftElement
                    pointerEvents="none"
                    color="#FFFFFF"
                >
                    <Search2Icon />
                </InputLeftElement>        
                    <Input
                        w="50vw"
                        minW="300px"
                        minLength="3"
                        maxLength="20"
                        focusBorderColor="#FF8A44"
                        type="text"
                        fontSize="1.5rem"
                        color="#FFFFFF"
                        fontWeight="300"
                        variant="flushed"        
                        onChange={(e) => {
                            setSearchField(e.target.value);
                        }} 
                    />                    
                {errorState && <Text 
                    color="#F06872"
                    fontWeight="450"
                    textShadow="2px 2px 5px #1B484B"
                    >
                        { error }
                    </Text>
                }
            </InputGroup>
        </>
    )
}

export default InputField;
