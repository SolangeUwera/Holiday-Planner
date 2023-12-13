import "../styles/Dashboard.css";
import { Outlet } from "react-router-dom";
import DashSide from "../components/DashSide";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dasboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  // const person = localStorage.getItem("user");

  useEffect(() => {
    console.log(userString);
    console.log(user);
    console.log(token);
    if (token && user.role === "user") {
      navigate("/");
    } else if (!token) {
      navigate("/login");
    }
  }, );

  return (
    <>
      <div className="wrap-da">
        <header className="header">
          <h3> This is the updated Dashboard! </h3>
        </header>
        <Outlet />
        <DashSide />
      </div>
    </>
  );
};

export default Dasboard;
