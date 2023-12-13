import "../styles/TourForm.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const EditTour = () => {
  const [editTourLoading, setEditTourLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  let tourId = params.id;
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

  /*    ==============================      */
  const fetchTour = () => {
    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setDestinationImage(response?.data?.backdropImage);
        setDestination(response?.data?.destination);
        setTitle(response?.data?.Title);
        setDescription(response?.data?.Description);
        setDuration(response?.data?.Duration);
        setGroupSize(response?.data?.GroupSize);
        setPrice(response?.data?.Price);
        setDiscount(response?.data?.Discount);
        setTourType(response?.data?.TourType);
        setDeparture(response?.data?.Departure);
        setSeats(response?.data?.Seats);
        setFromMonth(response?.data?.fromMonth);
        setToMonth(response?.data?.toMonth);
        setDepartureTime(response?.data?.departureTime);
        setReturnTime(response?.data?.ReturnTime);

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchTour();
  }, );
  /*    ==============================      */

  /*    ==============================      */
  const submitNewTour = (e) => {
    e.preventDefault();
    setEditTourLoading(true);
    let formdata = new FormData();
    formdata.append("backdropImage", destinationImage);
    formdata.append("destination", destination);
    formdata.append("Title", title);
    formdata.append("Duration", duration);
    formdata.append("Description", description);
    formdata.append("GroupSize", groupSize);
    formdata.append("Price", price);
    formdata.append("Discount", discount);
    formdata.append("TourType", tourType);
    formdata.append("Departure", departure);
    formdata.append("Seats", Seats);
    formdata.append("fromMonth", fromMonth);
    formdata.append("toMonth", toMonth);
    formdata.append("departureTime", departureTime);
    formdata.append("ReturnTime", ReturnTime);

    let token = localStorage.getItem("token");

    axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`,
      data: formdata,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((Response) => {
        setEditTourLoading(false);
        console.log(Response);
        toast.success(Response.data.message);

        setTimeout(() => {
          navigate("/dashboard/tourdashboard");
        }, 2000);
      })
      .catch((error) => {
        setEditTourLoading(false);
        console.log(error);
        toast.error(error.message);
      });
  };
  /*    ======================================   */

  return (
    <form action="" className="addTrurForm">
      <label htmlFor="">Destination Image</label>
      <input
        type="file"
        src=""
        alt=""
        placeholder="Enter New image"
        className="filee"
        onChange={(e) => {
          e.preventDefault();
          setDestinationImage(e.target.files[0]);
        }}
      />

      <label htmlFor="">Destination</label>
      <input
        value={destination}
        type="text"
        placeholder="mention your New destination"
        onChange={(e) => {
          e.preventDefault();
          setDestination(e.target.value);
        }}
      />

      <label htmlFor="">Title</label>
      <input
        value={title}
        type="text"
        placeholder="mention your New destination"
        onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }}
      />

      <label htmlFor="">Description</label>
      <input
        value={description}
        type="text"
        placeholder="mention your New destination"
        onChange={(e) => {
          e.preventDefault();
          setDescription(e.target.value);
        }}
      />

      <label htmlFor="">Duration</label>
      <input
        value={duration}
        type="text"
        placeholder="how long will you stay ?"
        onChange={(e) => {
          e.preventDefault();
          setDuration(e.target.value);
        }}
      />

      <label htmlFor="">Group size</label>
      <input
        value={groupSize}
        type="text"
        placeholder="let us know number of people"
        onChange={(e) => {
          e.preventDefault();
          setGroupSize(e.target.value);
        }}
      />

      <label htmlFor="">Price</label>
      <input
        value={price}
        type="number"
        placeholder="New price in dollar $"
        onChange={(e) => {
          e.preventDefault();
          setPrice(e.target.value);
        }}
      />

      <label htmlFor="">Discount</label>
      <input
        value={discount}
        type="number"
        placeholder="discount"
        onChange={(e) => {
          e.preventDefault();
          setDiscount(e.target.value);
        }}
      />

      <label htmlFor="">Tour Type</label>
      <input
        value={tourType}
        type="text"
        placeholder="tour type"
        onChange={(e) => {
          e.preventDefault();
          setTourType(e.target.value);
        }}
      />

      <label htmlFor="">Departure</label>
      <input
        value={departure}
        type="text"
        placeholder="Departure"
        onChange={(e) => {
          e.preventDefault();
          setDeparture(e.target.value);
        }}
      />

      <label htmlFor="">Seats</label>
      <input
        value={Seats}
        type="text"
        placeholder="Seats"
        onChange={(e) => {
          e.preventDefault();
          setSeats(e.target.value);
        }}
      />

      <label htmlFor="">From (Month)</label>
      <input
        value={fromMonth}
        type="text"
        placeholder="from month"
        onChange={(e) => {
          e.preventDefault();
          setFromMonth(e.target.value);
        }}
      />

      <label htmlFor="">To (Month)</label>
      <input
        value={toMonth}
        type="text"
        placeholder="to month"
        onChange={(e) => {
          e.preventDefault();
          setToMonth(e.target.value);
        }}
      />

      <label htmlFor="">Departure time</label>
      <input
        value={departureTime}
        type="text"
        placeholder="Departure time"
        onChange={(e) => {
          e.preventDefault();
          setDepartureTime(e.target.value);
        }}
      />

      <label htmlFor="">Return Time</label>
      <input
        value={ReturnTime}
        type="text"
        placeholder="Return time"
        onChange={(e) => {
          e.preventDefault();
          setReturnTime(e.target.value);
        }}
      />

      <button className="addTourbu" onClick={submitNewTour}>
        {editTourLoading ? (
          <ScaleLoader
            color="#cc8809"
            height={18}
            radius={3}
            width={9}
            className="loader"
          />
        ) : (
          "Submit New Tour"
        )}
      </button>
      <ToastContainer />
    </form>
  );
};

export default EditTour;
