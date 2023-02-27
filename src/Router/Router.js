import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "../Pages/Feed"
import Login from "../Pages/Login"
import Signup from "../Pages/Sign-up"
import Details from "../Pages/Details"
import Create from "../Pages/Create"
import Error from "../Pages/Error"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Sign-up" element={<Signup />} />
                <Route path="/Details" element={<Details />} />
                <Route path="/Create" element={<Create />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router