import "./App.css";
import Navbar from "./components/NavBar";
import Homepage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contacts";
import About from "./components/AboutUs";
import Tour from "./pages/Tour";
import Login from "./pages/Login";
import Sign from "./pages/SignUp";
import TourDetail from "./pages/TourDetails";
import Dasboard from "./pages/Dashboard";
import DashMain from "./components/DashMain";
import TourDashboard from "./pages/TourDashboard";
import TourForm from "./pages/TourForm";
import EditTour from "./pages/EditTour";
import Users from "./pages/Users";
import EditUser from "./pages/EditUser";
import Bookings from "./pages/Bookings";
import EditBookings from "./pages/EditBookings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="/tourdetail/:id" element={<TourDetail />} />
            <Route path="/tour" element={<Tour />} />
          </Route>
          <Route path="/dashboard" element={<Dasboard />}>
            <Route index element={<DashMain />} />
            <Route path="tourdashboard" element={<TourDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="tourform" element={<TourForm />} />
            <Route path="edittour/:id" element={<EditTour />} />
            <Route path="edituser/:id" element={<EditUser />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="editbookings/:id" element={<EditBookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
