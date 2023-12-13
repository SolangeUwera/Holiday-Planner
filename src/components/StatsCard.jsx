import React from "react";
// import zebra from "../assets/brownZebraPrint.jpg";
import "../styles/Dashboard.css";

const StatsCard = ({ title, amount }) => {
  return (
    <div className="stats-container">
      {/* <div className="stats-img">
        <img src={zebra} alt="" />
      </div> */}
      <div className="stats-description">
        <p className="stats-desc-title">{title}</p>
        <p className="stats-desc-amount">{amount}</p>
      </div>
    </div>
  );
};

export default StatsCard;
