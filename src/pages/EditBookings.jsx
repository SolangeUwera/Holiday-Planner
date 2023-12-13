import "../styles/Bookings.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const EditBookings = () => {
  const [newBookingLoading, setNewBookingLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  let bookId = params.id;

  const [bookName, setBookName] = useState();
  const [bookEmail, setBookEmail] = useState();
  const [bookPhone, setBookPhone] = useState();
  const [bookDate, setBookDate] = useState();
  const [bookTickets, setBookTickets] = useState();

  const fetchBook = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/${bookId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {


        setBookName(response?.data?.fullname);
        setBookEmail(response?.data?.email);
        setBookPhone(response?.data?.phone);
        setBookDate(response?.data?.date);
        setBookTickets(response?.data?.numberOfTickets);
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBook();
  }, );

  const submitNewBook = (e) => {
    e.preventDefault();
    setNewBookingLoading(true);
    const data = {
      fullname: bookName,
      email: bookEmail,
      phone: bookPhone,
      date: bookDate,
      numberOfTickets: bookTickets,
    };

    let token = localStorage.getItem("token");

    axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/update/${bookId}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((Response) => {
        setNewBookingLoading(false);
        console.log(Response);
        toast.success("Booking Updated Succesfully");

        setTimeout(() => {
          navigate("/dashboard/bookings");
        }, 2000);
      })
      .catch((error) => {
        setNewBookingLoading(false);
        console.log(error);
        toast.error(error.message);
      });
  };

  return (

    <form action="" className="addTrurForm">
      <h4>EDIT BOOKING</h4>

      <label htmlFor="">Name</label>
      <input
        value={bookName}
        type="text"
        placeholder=" New Booker Name"
        onChange={(e) => {
          e.preventDefault();
          setBookName(e.target.value);

        }}
      />

      <label htmlFor=""> Email</label>
      <input
        value={bookEmail}
        type="text"
        placeholder=" New  Email"
        onChange={(e) => {
          e.preventDefault();
          setBookEmail(e.target.value);
        }}
      />

      <label htmlFor="">New Phone</label>
      <input
        value={bookPhone}
        type="text"
        placeholder="New User Role"
        onChange={(e) => {
          e.preventDefault();
          setBookPhone(e.target.value);
        }}
      />

      <label htmlFor="">New Date</label>
      <input
        value={bookDate}
        type="date"
        placeholder="New User Role"
        onChange={(e) => {
          e.preventDefault();
          setBookDate(e.target.value);
        }}
      />

      <label htmlFor="">New Number Of Tickets</label>
      <input
        value={bookTickets}
        type="number"
        placeholder="New Ticket Number"
        onChange={(e) => {
          e.preventDefault();
          setBookTickets(parseInt(e.target.value));
        }}
      />

      <button className="addTourbu" onClick={submitNewBook}>
        {newBookingLoading ? (
          <ScaleLoader
            color="#cc8809"
            height={18}
            radius={3}
            width={9}
            className="loader"
          />
        ) : (
          "Create New Booking"
        )}
      </button>
      {/* <ToastContainer /> */}
    </form>
  );
};

export default EditBookings;
