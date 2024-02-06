import { Box, Container } from "@chakra-ui/react"

const ContainerLg = (props) => {
    return (
    <Container maxW={1280} mx={"auto"} px={["20px", "null", 0]}>
        {props.children}
    </Container>
    )
}

export const Section = (props) => {
    const backgroundColor = props.isLightBackground ? "white" : "gray.100"
    return(
        <Box py={"100px"} bg={backgroundColor}>
            {props.children}
        </Box>
    )
}
export default ContainerLg