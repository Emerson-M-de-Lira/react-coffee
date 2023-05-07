import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import SignupForm from "../Components/SignupForm"
import { GlobalContext } from "../GlobalState/GlobalContext"

const Signup = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" })
    //console.log(form.name, "name") //chamada de um objeto
    //console.log(form[""]) //outra forma de chamar objeto

    const onChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const context = useContext(GlobalContext)
    const signup = context

    const navigate = useNavigate
    return (
        <SignupForm onChange={onChange} form={form} signup={signup} navigate={navigate}  />
    )
}
export default Signup 