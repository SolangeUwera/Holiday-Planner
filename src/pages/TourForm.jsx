import "../styles/TourForm.css";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const TourForm = () => {
  const [NewFormLoading, setNewFormLoading] = useState(false);
  const navigate = useNavigate();
  const [destinationImage, setDestinationImage] = useState();
  const [destination, setDestination] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [groupSize, setGroupSize] = useState();
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [tourType, setTourType] = useState();
  const [departure, setDeparture] = useState();
  const [Seats, setSeats] = useState();
  const [fromMonth, setFromMonth] = useState();
  const [toMonth, setToMonth] = useState();
  const [departureTime, setDepartureTime] = useState();
  const [ReturnTime, setReturnTime] = useState();

  const submitTour = (e) => {
    e.preventDefault();
    setNewFormLoading(false);
    let data = new FormData();
    data.append("backdropImage", destinationImage);
    data.append("destination", destination);
    data.append("Title", title);
    data.append("Description", description);
    data.append("Duration", duration);
    data.append("GroupSize", groupSize);
    data.append("Price", price);
    data.append("Discount", discount);
    data.append("TourType", tourType);
    data.append("Departure", departure);
    data.append("Seats", Seats);
    data.append("fromMonth", fromMonth);
    data.append("toMonth", toMonth);
    data.append("departureTime", departureTime);
    data.append("ReturnTime", ReturnTime);

    let token = localStorage.getItem("token");

    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((Response) => {
        setNewFormLoading(false);
        console.log(Response);
        toast.success(Response.data.message);

        setTimeout(() => {
          navigate("/dashboard/tourdashboard");
        }, 2000);
      })
      .catch((error) => {
        setNewFormLoading(false);
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <form action="" className="addTurForm">
      <div>
        <label htmlFor=""> Destination Image</label>
        <input
          type="file"
          src=""
          alt="Enter the image"
          placeholder="Enter the image"
          className="file"
          onChange={(e) => {
            e.preventDefault();
            setDestinationImage(e.target.files[0]);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Destination</label>
        <input
          type="text"
          placeholder="mention your  destination"
          onChange={(e) => {
            e.preventDefault();
            setDestination(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Put your Title"
          onChange={(e) => {
            e.preventDefault();
            setTitle(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Description</label>
        <input
          type="text"
          placeholder="Describe your  destination"
          onChange={(e) => {
            e.preventDefault();
            setDescription(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Duration</label>
        <input
          type="text"
          placeholder="how long is the stay ?"
          onChange={(e) => {
            e.preventDefault();
            setDuration(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Group size</label>
        <input
          type="text"
          placeholder="let us know number of people"
          onChange={(e) => {
            e.preventDefault();
            setGroupSize(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Price</label>
        <input
          type="number"
          placeholder="price in dollar$"
          onChange={(e) => {
            e.preventDefault();
            setPrice(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Discount</label>
        <input
          type="number"
          placeholder="Discount price "
          onChange={(e) => {
            e.preventDefault();
            setDiscount(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Tour Type</label>
        <input
          type="text"
          placeholder="Input Tour Type"
          onChange={(e) => {
            e.preventDefault();
            setTourType(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Departure</label>
        <input
          type="text"
          placeholder="Departure of the tour"
          onChange={(e) => {
            e.preventDefault();
            setDeparture(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Seats</label>
        <input
          type="text"
          placeholder="Input Seats"
          onChange={(e) => {
            e.preventDefault();
            setSeats(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">From (Month)</label>
        <input
          type="text"
          placeholder="From Which Month ?"
          onChange={(e) => {
            e.preventDefault();
            setFromMonth(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">To (Month)</label>
        <input
          type="text"
          placeholder="Up to Which Month ?"
          onChange={(e) => {
            e.preventDefault();
            setToMonth(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Departure Time </label>
        <input
          type="text"
          placeholder="Departure time"
          onChange={(e) => {
            e.preventDefault();
            setDepartureTime(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="">Return Time</label>
        <input
          type="text"
          placeholder="Return Time"
          onChange={(e) => {
            e.preventDefault();
            setReturnTime(e.target.value);
          }}
        />
      </div>

      <button className="addTourbu" onClick={submitTour}>
        {NewFormLoading ? (
          <ScaleLoader
            color="#cc8809"
            height={18}
            radius={3}
            width={9}
            className="loader"
          />
        ) : (
          "Create New Tour"
        )}
      </button>
      <ToastContainer />
    </form>
  );
};

export default TourForm;
