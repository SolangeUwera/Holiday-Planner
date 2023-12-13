import "../styles/SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";

const Sign = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [fullNames, setFullNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
      data: {
        email: email,
        fullname: fullNames,
        password: password,
      },
    })
      .then((Response) => {
        localStorage.setItem("token", Response.data.access_token);
        localStorage.setItem("user", JSON.stringify(Response.data.user));
        toast.success("User registered succesfully");
        setIsLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="sl-container">
      <form className="sl-form">
        <h1>Sign Up</h1>

        <div className="flex-column">
          <label>Full Names</label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setFullNames(e.target.value);
            }}
            type="text"
            className="sl-input"
            placeholder="Example(UWERA Solange)"
          />
        </div>

        <div className="flex-column">
          <label>Email Adress</label>
        </div>
        <div className="sl-inputForm">
          <input
            required
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            type="email"
            className="sl-input"
            placeholder="Example(usolange13@gmail.com)"
          />
        </div>
        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="sl-inputForm">
          <input
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            type="password"
            className="sl-input"
            placeholder="Enter 6 character or more"
          />
        </div>

        <button onClick={(e) => handleSignup(e)} className="sl-button-submit">
          {isLoading ? (
            <PulseLoader color="#c29d59bf" className="loader" />
          ) : (
            "SIGN UP"
          )}
        </button>

        <div className="flex-row">
          <button className="sl-btn google">
            <FcGoogle />
            Google
          </button>
          <button className="sl-btn facebook">
            <CgFacebook />
            Facebook
          </button>
        </div>
      </form>
      <div className="spic-side">
        <img src="woman-png.png" alt="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sign;
