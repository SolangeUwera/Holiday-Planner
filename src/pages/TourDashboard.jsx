import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import PuffLoader from "react-spinners/PuffLoader";

const TourDashboard = () => {
  const [tourLoading, setTourLoading] = useState(false);

  // ============ tours fetchning ============================
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  let token = localStorage.getItem("token");
  const fetchTours = () => {
    setTourLoading(false);
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((Response) => {
        setTourLoading(false);
        setTableData(Response.data);
        console.log(Response);
      })
      .catch((error) => {
        setTourLoading(false);
        console.log(error);
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetchTours();
  }, );
  // ============ tours fetchning ============================
  // ============ Delete   ===================================
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete This Tour ?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/deleteAll?fieldName=_id&value=${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("tour deleted successfully");
          console.log(response, "Response");
          setTimeout(() => {
            navigate("/dashboard/tourdashboard");
          }, 2000);
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error, "Error");
        });
    }
  };
  // ============ Delete End =================================
  // ==================  PAGINATION  =========================
  const [tourNumber, setTourNumber] = useState(0);
  const toursPerPage = 4;
  const toursVisited = tourNumber * toursPerPage;
  const displayTours = tableData
    .slice(toursVisited, toursVisited + toursPerPage)
    .map((table) => {
      return (
        <tr>
          <td>
            <img src={table.backdropImage} alt="" className="image-tour" />
          </td>
          <td>{table.destination}</td>
          <td>{table.Duration} Days</td>
          <td>{table.GroupSize}+ People</td>
          <td> $ {table.Price}</td>
          <td>
            <td>
              <span className="actions">
                <BsFillTrashFill
                  className="delete-btn"
                  onClick={() => handleDelete(table._id)}
                
                />

                <BsFillPencilFill
                  className="edit-buttonn"
                  onClick={() => navigate(`/dashboard/edittour/${table._id}`)}
                />
              </span>
            </td>
          </td>
        </tr>
      );
    });

  const tourCount = Math.ceil(tableData.length / toursPerPage);
  const changeTour = ({ selected }) => {
    setTourNumber(selected);
  };
  // ==================  PAGINATION  =========================
  return (
    <div>
      <div className="sidebar-right-side">
        <Link to="/dashboard/tourform">
          <button className="Add-tour-btn">+ Add Tour</button>
        </Link>
        {tourLoading ? (
          <PuffLoader className="circle-loader" color="red" size="340" />
        ) : (
          <div className="table-component">
            <table class="table">
              <thead>
                <tr>
                  <th>Destination Image</th>
                  <th>Destination</th>
                  <th>Duration</th>
                  <th>Group Size</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody> {displayTours} </tbody>
            </table>
            <div className="downn">
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                pageCount={tourCount}
                onPageChange={changeTour}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"pageDisabled"}
                activeClassName={"activePage"}
              />
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default TourDashboard;
