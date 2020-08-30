import React from "react";
import { Link } from "react-router-dom";
import databeta_screenlogo  from '../../assets/images/Data-BETA-screenlogo.jpg';

const HomePage = () => (
  <div className="jumbotron">
    <h1>Data - BETA</h1>
    <h3>Anti-Aging Science</h3>
    <figure>
      <img className='imgClock' src={databeta_screenlogo}/>
    </figure>


    <div className='centerPositionButton'>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  </div>
);

export default HomePage;
