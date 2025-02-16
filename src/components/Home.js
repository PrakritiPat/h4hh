import React from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";
import bearImage from "../assets/bear1.png";



const Home = () => {
  let navigate = useNavigate();
  return (
  <div className= "background-container">
       <div style={{ textAlign: "center", marginTop: "50px" }}>

<h1>Honey Tutoring</h1>
<p>Empowering students, sustaining the future. We provide resources
and support to help students thrive while promoting sustainable 
practices that create a better tomorrow. Join us in making education 
and the planet more sustainable, one step at a time.</p>
<img src={bearImage} alt="Bear" className="custom-image" />

<div className = "button-container">
<button5 onClick={() => navigate("/Login")}>Login</button5>
<button5 onClick={() => navigate("/Selection")}>SignUp</button5>

</div>



</div>
  </div>
 
    
  );
};

export default Home;
