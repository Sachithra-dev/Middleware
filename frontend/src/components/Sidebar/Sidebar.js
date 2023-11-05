import React from "react";
import "./sidebar.css";
import { FaGraduationCap ,FaSearch , FaStar, FaChartLine} from "react-icons/fa";
import { AiOutlineBell, AiOutlineLogout } from "react-icons/ai";

const Sidebar = ({ logout ,setselected }) => {
  const handleClick = (selected) => {
    setselected(selected); 
  };

  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>Sri-Care</h1>
      </div>
      <a href="#" onClick={() => handleClick("dashboard")} className="sidebar-link">
        <FaSearch className="nav-icons" />
        <span className="nav-text">Account Summary</span>
      </a>
      <a href="#" onClick={() => handleClick("services")} className="sidebar-link">
        <FaGraduationCap className="nav-icons" />
        <span className="nav-text">Services</span>
      </a>
      <a href="#" onClick={() => handleClick("bills")} className="sidebar-link">
        <FaStar className="nav-icons" />
        <span className="nav-text">View Bills</span>
      </a>
      <a href="#" onClick={logout} className="sidebar-link">
        <AiOutlineLogout className="nav-icons" />
        <span className="nav-text">Logout</span>
      </a>
    </section>
  );
};

export default Sidebar;
