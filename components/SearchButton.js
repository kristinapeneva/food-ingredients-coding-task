import { Button } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const SearchButton = ({handleSearchOnClick}) => {
    return(
        <>
            <Button
                w="fit-content"
                maxW="300px"
                color="#1B484B"
                bgGradient="linear-gradient(to-t,#FF8A44, #FF9D56)"
                h="fit-content"
                fontSize="1xl"
                p="15px 45px"
                border="2px solid #FF9D56"
                _hover={{ border: "2px solid white", transform: "scale(1.05)", color:"white"}}
                type='submit' onClick={() => handleSearchOnClick()}
            >
                <ArrowRightIcon />
            </Button>
        </>
    )
}

export default SearchButton;