import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { useState } from "react";
import Modal from "./Modal";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [openform, setOpenform] = useState(false);
  function handleClick() {
    setOpenform(!openform);
  }

  return (
    <>
      <div>
        {openform && <Modal closeModal={() => setOpenform(false)} />}
        <div className="blachead">
          <div className="blactainer">
            <div className="bachlt">
              <i>
                <TfiEmail />
              </i>
              <h2> Holidayplaners@gmail.com</h2>
              <span></span>
              <br />
              <i>
                <BsTelephone />
              </i>
              <h2>+250785196634</h2>
            </div>
            <div className="rgt">
              <i>
                <a href="https://web.facebook.com/" /* target="_blank */>
                  <SlSocialFacebook className="fbb" />
                </a>
              </i>

              <i>
                <a href="https://www.instagram.com/" /*target="_blank"*/>
                  <PiInstagramLogo className="fbb" />
                </a>
              </i>

              <i>
                <a href="https://twitter.com/home" /*target="_blank"*/>
                  <SlSocialTwitter className="fbb" />
                </a>
              </i>
            </div>
          </div>
        </div>

        <div className="bottom-header">
          <a href="/">
            <img src="logo.png" alt="logo" />
          </a>

          <div className="bottom-header-right">
            <button className="reservebuto">RESERVE</button>
            <i>
              <HiOutlineSearchCircle />
            </i>
            {/* ======MENU BAR====== */}

            <div className="menu-icon" onClick={handleClick}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            {/* ======END MENU BAR====== */}
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
