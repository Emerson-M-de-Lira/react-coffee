import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "../Pages/feed"
import Login from "../Pages/login"
import Signup from "../Pages/sign-up"
import Details from "../Pages/details"
import Create from "../Pages/create"
import Error from "../Pages/error"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Feed/>}/>
                <Route path="/login"element={<Login/>}/>
                <Route path="/sign-up"element={<Signup/>}/>
                <Route path="/details"element={<Details/>}/>
                <Route path="/Create"element={<Create />}/>
                <Route path="*"element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router