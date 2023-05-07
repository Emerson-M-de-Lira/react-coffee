import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import { GlobalContext } from "../GlobalState/GlobalContext";
import { goToFeedPage } from "../Routers/coordinator";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const context = useContext(GlobalContext);
  const  login = context;
  const navigate = useNavigate();

  return (
    <LoginForm
      Login={login}
      form={form}
      onChange={onChange}
      navigate={navigate}
      goToFeedPage={goToFeedPage}
    />
  );
};

export default Login;
