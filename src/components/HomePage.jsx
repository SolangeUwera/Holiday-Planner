import React from "react";
import "../styles/Homepage.css";
import { ImLocation } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
// import { FaFlag } from "react-icons/fa";
import About from "./AboutUs";
import imgJer2 from'../assets/GreekH.jpg'
import imgJer3 from'../assets/houses.jpg'
import imgindia from '../assets/india.jpg'
import imgJer from '../assets/Jerusalem.jpg'

const Homepage = () => {
  return (
    <div>
      <div className="Homcfirst">
        <h1>
          Get Ready to Travel <br />
          <span>The World.</span>
        </h1>
        <p>
          A journey of a 1000 miles starts with a single step. <br /> Import the
          full demo content with 1 click and create <br /> a head-turning
          website for your <br /> travel agency.
        </p>
      </div>
      <div className="whitediv">
      <div className="place">
        <div className="pwra">
          <span>
            <ImLocation className="locationn" />
          </span>
          <input type="text" placeholder="where to ?" />
        </div>
        <span className="calender">
          <FaCalendarAlt />
        </span>
        <select name="" id="">
          <option value=""> When ?</option>
          <option value="">january</option>
          <option value="">february</option>
          <option value="">March</option>
          <option value="">April</option>
          <option value=""> May?</option>
          <option value="">june</option>
          <option value="">july</option>
          <option value="">August</option>
          <option value="">September</option>
          <option value="">October</option>
          <option value="">November</option>
          <option value="">December</option>
        </select>
      
        <select name="" id="">
          <option value="">Travel Tyipe</option>
          <option value="">Rwanda</option>
          <option value="">Burundi</option>
          <option value="">Zaire</option>
          <option value="">Togooo</option>
          <option value="">Rwanda</option>
          <option value="">Burundi</option>
          <option value="">Zayire</option>
          <option value="">Togo</option>
        </select>
        <button>FIND NOW</button>
        </div>
      </div>
      <About />


      <div className="jeudiv">

      <h1 className='htoImagebelow1'>Amazing Destination</h1>
      <h1 className='htoImagebelow'>Choose The Destination Just <br />
          Right For Your Vacation</h1>
      <img src={imgJer} alt="img" className='imgJerusalem' /><br />
      
      <img src={imgJer2} alt="img" className='imgJerusalem2' />
      <img src={imgJer3} alt="img" className='imgJerusalem3' />
      <img src={imgindia} alt="img" className='india' />

      <button className='ViewAllbuto'> View All</button>


      <button className='Jerusalema'>Greek</button>
      <button className='Jerusalemb'>Italy</button>
      <button className='Jerusalemc'>Jerusalem</button>
      <button className='Jerusalemd'>India </button>
      </div>
      






      
    </div>
  );
};

export default Homepage;
