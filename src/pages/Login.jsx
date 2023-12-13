import "../styles/Login.css";
import { Link } from "react-router-dom";
import { CgFacebook,  } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [emaiil, setEmaiil] = useState("");
  const [passworrd, setPassworrd] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios({

      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
      data: {

        email: emaiil,
        password: passworrd,

      },
    })
      .then((response) => {
        console.log(response);
        //user
        localStorage.setItem("user", JSON.stringify(response.data.user));
        const user = localStorage.getItem("user");
        console.log(user);
        // token
        localStorage.setItem("token", response.data.access_token);
        const token = localStorage.getItem("token");
        console.log(token);

        toast.success("Logged in sucesfully");
        setIsLoading(false);
        setTimeout(() => {
          if (response.data.user.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }, 2000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        toast.error(error.response.data);
      });
  };

  return (
    <div className="l-container">
      <form className="l-form">
        <h1>Login</h1>
        <p className="l-p">
          Dons't have an account yet?{" "}
          <Link to="/signup" className="l-span">
            Sign Up
          </Link>
        </p>
        <div className="flex-column">
          <label>Email Adress</label>
        </div>

        <div className="l-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setEmaiil(e.target.value);
            }}
            type="text"
            className="l-input"
            placeholder="Example(usolange13@gmail.com)"
          />
        </div>
        <div className="flex-column">
          <label>Password </label>
          <Link className="l-spanp">Forgot password?</Link>
        </div>
        <div className="l-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassworrd(e.target.value);
            }}
            type="password"
            className="l-input"
            placeholder="Enter 6 character or more"
          />
        </div>

        <button onClick={(e) => handleSignin(e)} className="l-button-submit">
          {isLoading ? (
            <PulseLoader color="#c29d59bf" className="loader" />
          ) : (
            "LOGIN"
          )}
        </button>

        <div className="flex-row">
          <button className="l-btn google">
            <FcGoogle />
            Google
          </button>
          <button className="l-btn facebook">
            <CgFacebook />
            Facebook
          </button>
        </div>
      </form>
      <div className="pic-side">
        <img src="woman-png.png" alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
