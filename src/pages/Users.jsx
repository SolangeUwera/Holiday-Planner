import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "../styles/Users.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import PuffLoader from "react-spinners/PuffLoader";

const Users = () => {
  // loading =========================
  const [userLoading, setUserLoading] = useState(false);
  // loading End =====================
  // ============== fetching user =====================
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  let token = localStorage.getItem("token");
  const fetchUsers = () => {
    setUserLoading(true);
    axios({
      method: "GET",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((Response) => {
        setUserLoading(false);
        setUsers(Response.data);
        console.log(Response);
      })
      .catch((error) => {
        setUserLoading(false);
        console.log(error);
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  // ============== End fetching user =====================
  // ============== Deleting user =====================
  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete This User ?")) {
      let token = localStorage.getItem("token");
      axios({
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          toast.success("User deleted successfully");
          console.log(response, "Response");
          setTimeout(() => {
            navigate("/dashboard/users");
          }, 2000);
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error, "Error");
        });
    }
  };
  // ============== End Deleting  user =====================

  // ============== pagination =========================
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    ?.map((user) => {
      return (
        <tr>
          <td>{user.fullName}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>

          <td className="right-td">
            <td className="right-tdd">
              <span className="actionss">
                <BsFillTrashFill
                  className="delete-btns"
                  onClick={() => handleDeleteUser(user._id)}
                />

                <BsFillPencilFill
                  className="edit-buttonns"
                  onClick={() => navigate(`/dashboard/edituser/${user._id}`)}
                />
              </span>
            </td>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // ============== End Pagination =====================

  return (
    <div className="sidebarr-right-sidee">
      {userLoading ? (
        <PuffLoader className="circle-loader" color="black" size="880" />
      ) : (
        <div className="table-componentt">
          <table class="tablee">
            <thead>
              <tr>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Role</th>
                <th className="actionf">Action</th>
              </tr>
            </thead>
            <tbody>{displayUsers}</tbody>
          </table>
          <div className="downn">
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              activeClassName={"activePage"}
            />
          </div>
        </div>
      )}

  
    </div>
  );
};

export default Users;
