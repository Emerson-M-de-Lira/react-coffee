import { useContext, useEffect } from "react"
import { GlobalContext } from "../GlobalState/GlobalContext"
import FeedCard from "../Components/FeedCard"
import { Box } from "@chakra-ui/react"
import Header from "../Components/Header"

const Feed = () => {
    const context = useContext(GlobalContext)
    const { getAllRecipes, recipes } = context

    useEffect(() => {
        getAllRecipes()
    }, [getAllRecipes])
return (
        <>
        <Header />
            <Box display={"flex"} flexWrap={"wrap"} gap={20} justifyContent={"center"} alignItems={"center"} >
                {
                    recipes.map((recipe) => {
                        return (
                            <FeedCard
                            key={recipe.id}
                            title={recipe.title}
                            img={recipe.imageUrl}
                            />
                            )
                        })
                    }
            </Box>
        </>
    )
}



export default Feed