import { Box, Image, Text } from "@chakra-ui/react";


const Results = ({ getNoResultMessage, inputWordState, response }) => {
    return (
        <>
            <Box
                width="60%"
                display="flex"
                flexDirection="column"
            >
                <Text 
                    fontSize="4xl"
                    fontWeight="700"
                    textColor="#FF8A44"
                >
                    Results{inputWordState && ` for ${ inputWordState }:`}
                </Text>
                <Box
                    width="100%"
                    height="fit-content"
                    display="flex"
                    flexDirection="column"
                >             
                    {(response && response.length > 0) ? response.map(x => {
                        return (
                            <Box 
                                key={x.id}
                                width="100%"
                                display="flex"
                                gap="20px"
                                boxShadow="0px 0px 20px 7px #DDDBDA"
                                m="10px 0px"
                                borderRadius="15px"
                                bg="white"
                                padding="30px"
                            >
                            <Image
                                src={`https://spoonacular.com/cdn/ingredients_100x100/${ x.image }`}
                                width="100px"
                                height="100px"
                                alt={x.name}
                            ></Image>
                            <Text 
                                fontSize="2xl"
                                margin="auto 0"
                                padding="10px"
                                fontWeight="350"
                                textColor="#1B484B"
                            >
                                {x.name}
                            </Text>                      
                        </Box>
                        )
                    }) : getNoResultMessage()}
                </Box>
            </Box>           
        </>
    )
}

export default Results;
