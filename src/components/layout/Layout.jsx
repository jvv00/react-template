import { Box } from "@chakra-ui/react";
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom";

const Layout = (props) => {
    
    return (
        <>
        <Box display={"flex"} flexDirection={"column"} minH={"150vh"}>
            <Header/>
                <Box as="main" id="main" flexGrow={1} pt={{sm: "60px", lg: "92px"}}>
                {/* {props.showTitle && <h2>{props.title}</h2>}
                    {props.children} */}
                    <Outlet/>
                </Box>
            <Footer/>
        </Box>
        </>
    )
}

const NoneLayout = () => {
    return (
        <>
        <Box bg={"#e2e2e2"}>
            <Box>
                <div>none</div>
                <Outlet/>
            </Box>
        </Box>
        </>
    )
}

export default Layout;
export {NoneLayout};