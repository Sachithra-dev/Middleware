import { useState , useEffect} from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import  Service  from "../Service/Service";
import Bill from "../Bill/Bill";
import Header from "../header";
import "./nav.css";

function Navigation({token , logout }) {
  const [selected, setselected] = useState('dashboard');
  return (
    <div className="main-container">
      <Sidebar setselected={setselected} logout={logout}/>
      <div className="content-area">
        <div><Header/></div>
        {selected === "dashboard" && <Dashboard token={token} />}
        {selected === "services" && <Service  token={token}/>}
        {selected === "bills" && <Bill token={token}/>}
      </div>
    </div>
  );
}

export default Navigation;