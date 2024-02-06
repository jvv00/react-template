import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Layout from "../../components/layout/Layout";
// import { motion } from "framer-motion";
import topImg from '../../assets/images/_8dhZ2QXoOxi4QAviL_x3x5lusaeVJGtVDvOJ8iyVrBQXOA-nEcst9MlALAimjErAAucAtO1Wb7CPknkBGNmITqi_wIqA0mbKeVM_4E.avif'

const Marketplace = () => {

// const boxStyle = {
//     width: "200px",
//     height: "200px",
//     background: "red",
//     borderRadius: "50%",
// }

    return (
        <>
            <div>
            {/* <h2>Marketplace</h2> */}
            </div>
            {/* <motion.div 
            style={boxStyle} 
            initial={{ opacity: 0 }} 
            animate={{opacity: 1, x: 100}}
            transition={{ duration: 2, ease: "easeInOut",}}
            /> */}
             <Box className="topCont" h={'500px'} bg={`url(${topImg}) no-repeat 50% 50% / cover `}></Box>
             <Image src={topImg} alt=""/>
             <Image src="/logo192.png"/>
            <Tabs position={'sticky'} top={0}>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>
                        </p>
                    </TabPanel>
                   
                </TabPanels>
                </Tabs>
                <div style={{ height: '100vh' }}></div>
        </>
        
    )
}

export default Marketplace;