import { Heading } from "@chakra-ui/react"

const Title = (props) => {
    return (
    <Heading as={"h3"} my={5} fontSize={28} fontWeight={700} color={"#222"}>
        {props.children}
    </Heading>
    )
}
const SubTitle = (props) => {
    return (
        <Heading as={"h4"} my={2} fontSize={18} fontWeight={600} color={"#333"}>
            {props.children}
        </Heading>
    )
}
export default Title
export {SubTitle}