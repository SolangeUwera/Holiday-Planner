import "../styles/Footer.css";
import { SlSocialTwitter } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="futer1">
      <div className="taicon">
        <div className="left">
          <Link to="/">
            <img src="white-logo.png" alt="" />
          </Link>
          <p>
            Holiday Planners sit amet consectetur  adipisicing elit.
            Perferendis sapiente <br />tenetur officiis explicabo fugit, sit
            mollitia eum atque excepturi quaerat autem.
          </p>
          <span>
            <input type="text" placeholder="Enter your Email" />
            <button type="submit">SAVE</button>
          </span>
          <div className="photopay">
            <img src="payment.png" alt="" />
          </div>
        </div>
        <div className="middle">
          <h1>Navigation</h1>
          <div className="line"></div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="/tour">Tour</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <h1>Need Help ?</h1>
          <div className="line"></div>
          <div className="part1">
            <span className="spn">
              <div className="part-1-left"></div>
              <div className="follow">
                {" "}
                <h2>Call Us</h2>
                <p>+250785196634</p>
              </div>
            </span>
          </div>

          <div className="part1">
            <span className="spn">
              <div className="part-1-left"></div>
              <div className="follow">
                {" "}
                <h2>Email for Us</h2>
                <p>holidayplanners@gmail.com</p>
              </div>
            </span>
          </div>

          <div className="part1">
            <span className="spn">
              <div className="part-1-left"></div>
              <div className="follow">
                {" "}
                <h2>Location</h2>
                <p>Rwanda-Ruyenzi</p>
              </div>
            </span>
          </div>

          <div className="part1">
            <span className="spn">
              <div className="part-1-left"></div>
              <div className="follow">
                {" "}
                <h2> Follow US </h2>
                <span className="here11111">
                  {" "}
                  <SlSocialTwitter className="here1111" />
                  <PiInstagramLogo className="ist" />
                  <SlSocialFacebook className="fcb" />
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="here111"></div>
      <div className="here111">
        <div className="here1">
          <p> Copyright © 2021 Geek Code Lab. All Rights Reserved..</p>
        </div>
        <div className="here">
          <ul>
            <li className="poy">Privacy Policy</li>
            <li className="poy">Terms Of use</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
