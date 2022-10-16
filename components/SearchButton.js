import { Button } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const SearchButton = ({ handleSearchOnClick }) => {
    return(
        <>
            <Button
                p="1rem 2rem"
                color="#1B484B"                
                fontSize="1rem"
                bgGradient="linear-gradient(to-t,#FF8A44, #FF9D56)"                
                border="2px solid #FF9D56"
                boxShadow="0px 0px 20px 7px #1B484B"
                _hover={{ 
                    border: "2px solid #FFFFFF",
                    transform: "scale(1.05)",
                    color:"#FFFFFF"
                }}
                _active={{
                    border: "2px solid #FF8A44",
                    transform: "scale(0.98)",
                    color: "#FF8A44"
                }}
                type='submit' onClick={() => handleSearchOnClick()}
            >
                <ArrowRightIcon />
            </Button>
        </>
    )
}

export default SearchButton;