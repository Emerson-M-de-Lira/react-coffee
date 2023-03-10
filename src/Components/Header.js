import { Button, Flex } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex p="6" justifyContent={"space-between"} bg="#3A5A40">
            <Button color={"white"} variant="link">
                Cookenu
            </Button>
            <Button color={"white"} variant="link">
                contato
            </Button>
           
        </Flex>
    )
}



export default Header