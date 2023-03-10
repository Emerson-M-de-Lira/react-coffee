import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constants/Url"
import { goToFeedPage } from "../Router/coordinator"
import { GlobalContext } from "react"

const GlobalState = ({ children }) => {
    const [recipes, setRecipes] = useState([])

    const signup = (body, navigate) => {
           //falta finalizar a função
        //jogar o token para o localstorage
        //redirecionar o usuário com token para página de feed

        axios.post(`${BASE_URL}/user/sign-up`, body)
            .then((res) => {
                localStorage.setItem("cookenu.token", res.data.token)
                
                goToFeedPage(navigate)
            })
            .catch((err) => console.log(err))
    }

    const login = (body, navigate) => {
        axios.post(`${BASE_URL}/user/login`, body)
            .then((res) => {
                localStorage.setItem("cookenu.token", res.data.token)
                goToFeedPage(navigate)

            })
            .catch((err) => {
                console.log(err)
            })

    }

    const getAllRecipes = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem("cookenu.token")
            }
        }

        axios.get(`${BASE_URL}/recipe/all`, headers)
            .then((res) => {
                setRecipes(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const data = {
        signup,
        login,
        getAllRecipes,
        recipes

    }

    
    return (
    
        <GlobalContext.Provider value={data}>
            {children}
        </GlobalContext.Provider>
            
           
    
    
    )
}

export default GlobalState