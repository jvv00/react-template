import { Box } from "@chakra-ui/react";
import ContainerLg from "./Container";

const Footer = () => {
    return (
        <Box as="footer" borderTop={"1px solid"} borderColor={"#000000"} background={"lightgoldenrodyellow"} height={"100px"} >
        <ContainerLg>
            Footer
        </ContainerLg>
        </Box>
        
    )
}

export default Footer;