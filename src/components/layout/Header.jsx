import { Box, Button, ButtonGroup, Container, Heading, IconButton} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Gnb from "./Gnb";
import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import { PiHamburger } from "react-icons/pi";
import gsap from "gsap";
import { useEffect, useState } from "react";

// const Header = () => {

//     const HandleScroll = () => {
//         const scrollY = window.scrollY
//         const hd = document.querySelector('#header')
//         const navBelt = document.querySelector('.nav-belt__wrapper')
//         const navBar = document.querySelector('.nav-bar__wrapper')
//         const hdHeight = hd.offsetHeight // 헤더 높이
//         // const swiperHeight = document.querySelector('.main-slide').offsetHeight // 슬라이드 높이
//         const swiperHeight = document.querySelector('.main-slide')?.offsetHeight || 0; // 슬라이드 높이
//         console.log(scrollY)
//         console.log(swiperHeight - hdHeight)

//         // if : 100px 이상 스크롤 되면 헤더에 배경색을 입힌다.
//         if(scrollY > swiperHeight - hdHeight) {
//             // gsap.to(요소, {옵션})
//             gsap.to(navBar, {
//                 backgroundColor: '#fff', duration: 0.5,
//             });
//             gsap.to(navBelt, {
//                 backgroundColor: '#f6f7f8', duration: 0.5,
//             });
//             gsap.to(navBelt.querySelectorAll('button'), { color: '#000', duration: 0.5 });
//         } else {
//             // else : 100px 이하로 스크롤 되면 배경색을 없앤다.
//             gsap.to(navBar, {
//                 backgroundColor: '', duration: 0.5,
//             });
//             gsap.to(navBelt, {
//                 backgroundColor: '', duration: 0.5,
//             });
//         }
//     }   

//     window.addEventListener('scroll', HandleScroll)

//     return (
//         <Box 
//         id="header"
//         as="header" 
//         position={"fixed"} 
//         top={0} 
//         left={0} 
//         right={0} 
//         zIndex={1000} 
//         bg="rgba(0,0,0,.1)" 
//         backdropFilter={'saturate(180%) blur(5px)'}
//         >
const Header = () => {
    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const navBeltHeight = document.querySelector('.nav-belt__wrapper')?.offsetHeight || 0
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

            if (scrollPosition > navBeltHeight) {
                document.getElementById('header').style.top = '-32px'
                document.querySelector('.nav-bar__wrapper').style.position = 'fixed'
                document.querySelector('.nav-bar__wrapper').style.width = '100%'
            } else {
                document.getElementById('header').style.top = -scrollPosition + 'px'
                setIsScroll(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box
            as="header"
            id="header"
            position={'fixed'}
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            minH={'92px'}
            bg={isScroll ? 'rgba(0,0,0,.1)' : 'transparent'}
            backdropFilter={isScroll ? 'saturate(180%) blur(15px)' : 'none'}
        >
            <Box className="nav-belt__wrapper" display={["none", null, null, null,"block"]}h={"32px"} bg={"rgba(0,0,0,0.6)"}>
                <Container display="flex" justifyContent={"space-between"} alignContent={"center"} alignItems={"center"}>
                        <ButtonGroup gap={"10px"}>
                            <Button colorScheme="teal" variant="tnb">공공기관용</Button>
                            <Button colorScheme="teal" variant="tnb">금융 클라우드</Button>
                        </ButtonGroup>
                        <ButtonGroup gap={"10px"}>
                            <Button colorScheme="teal" variant="tnb">로그인</Button>
                            <Button colorScheme="teal" variant="tnb" color={"#4ca4f5"}>회원 가입</Button>
                            <Button colorScheme="teal" variant="tnb">Languages</Button>
                        </ButtonGroup>
                </Container>
            </Box>
            <Box className="nav-bar__wrapper" bg={"rgba(0,0,0,.05"} >
                <Container display={"flex"} alignItems={"center"} justifyContent={"space-between"} h={"60px"} >
                    <Heading as={"h1"} fontSize={24}>
                        <Link to="/">Dash Board</Link>
                    </Heading>
                    <Gnb/>
                    <ButtonGroup>
                        <IconButton variant='ghost' aria-label="Search database" icon={<SearchIcon />} />
                        <IconButton variant='ghost' aria-label="Light database" icon={<SunIcon />} />
                    <Button variant='ghost' display={{ sm: "flex", lg: "none"}} >
                        <PiHamburger />
                    </Button>
                    </ButtonGroup>

                </Container>
            </Box>
        </Box>
    )
}


export default Header;