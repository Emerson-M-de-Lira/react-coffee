import { useContext, useEffect } from "react"
import { GlobalContext } from "../GlobalState/GlobalContext"
import FeedCard from "../Components/FeedCard"
import Header from "../Components/Header"


const Feed = () => {
    const context = useContext(GlobalContext)
    const { getAllRecipes, recipes } = context


    useEffect(() => {
        getAllRecipes()
    })

    return (
        <>
            <Header />
            <box display={"flex"}
                flexwrap={"wrap"}
                gap={20}
                justifyContent={"center"}
                alignItems={"center"}>

                {
                    recipes.map((recipe) => {

                        return (<
                            FeedCard key={recipe.id}
                            title={recipe.title}
                            img={recipe.imageUrl}
                        />
                        )
                    })
                }

            </box>
        </>
    )

}



export default Feed