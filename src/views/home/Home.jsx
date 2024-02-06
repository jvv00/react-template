import Layout from "../../components/layout/Layout"
import Title, { SubTitle } from "../../components/common/Title";
import { Section } from "../../components/layout/Container";
import MainSlide from "./components/MainSlide";
import { Container } from "@chakra-ui/react";



const Home = () => {
    return (
        <>
        <MainSlide/>
        <Section isLightBackground={true}>
          <Container>
            <Title>회사소개</Title>
            <SubTitle>사장님 말씀</SubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores amet minima quo ratione sequi magnam soluta vitae id eum, modi, necessitatibus molestiae voluptatem voluptates, numquam unde quia veritatis. Id!
            <SubTitle>소개</SubTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, accusantium.
            </Container>
        </Section>  
        <Section>
          <Container>
            <Title>회사비전</Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam asperiores amet minima quo ratione sequi magnam soluta vitae id eum, modi, necessitatibus molestiae voluptatem voluptates, numquam unde quia veritatis. Id!
            </Container>
        </Section>
        </>
    )
}


export default Home;