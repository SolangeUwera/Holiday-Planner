
import "../styles/Modal.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
const Modal = ({ closeModal }) => {
  const [openModal, setOpenModal] = useState(true);

  const toogleModal = ()=>{
    setOpenModal(!openModal)
  }


  return (
    <div className="modal-container">

      <img src="white-logo.png" alt="logo" />
      <div className="bottom-container">
        <div className="menu-container">
          <ul>
            <li>
              <Link to="/" onClick={closeModal}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" onClick={closeModal}>
                About
              </Link>
            </li>
            <li>
              <Link to="/tour" onClick={closeModal}>
                Tour
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeModal}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeModal}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <IoCloseSharp onclick={toogleModal} className=" close "/>
    </div>
  );
};

export default Modal;
