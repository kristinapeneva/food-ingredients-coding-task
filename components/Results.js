import { Box, Image, Text, Flex } from "@chakra-ui/react";


const Results = ({ getNoResultMessage, inputWordState, response }) => {
    return (
        <>
            <Flex
                flexDirection="column"
                width="100%"
                h="fit-content"                
            >
                <Text 
                    fontSize="1.5rem"
                    fontWeight="600"
                >
                    Results{inputWordState && ` for ${ inputWordState }:`}
                </Text>
                <Flex
                    flexDirection="column"                                                   
                >             
                    {(response && response.length > 0) ? response.map(x => {
                        return (
                            <Flex
                                key={x.id}
                                w="50vw"
                                minW="300px"
                                gap="1rem"
                                boxShadow="0px 0px 20px 7px #DDDBDA"
                                m="1rem 0px"
                                borderRadius="1rem"
                                bg="#FFFFFFF"
                                padding="2rem"
                            >
                                <Image
                                    src={`https://spoonacular.com/cdn/ingredients_100x100/${ x.image }`}
                                    width="100px"
                                    height="100px"
                                    alt={x.name}
                                ></Image>
                                <Text 
                                    fontSize="1.5rem"
                                    margin="auto 0"
                                    padding="1rem"
                                    fontWeight="450"
                                    textColor="#1B484B"
                                >
                                    {x.name}
                                </Text>                      
                            </Flex>
                        )
                    }) : getNoResultMessage()}
                </Flex>
            </Flex>           
        </>
    )
}

export default Results;
