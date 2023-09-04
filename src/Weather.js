import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">
     <h1>Lisbon</h1>
     <ul>
        <li>Monday 20:00</li>
        <li>Clear</li>
     </ul>
     <div className="row">
       <div className="col-6">
        <img src="" alt="Clear"/> 18C|F 
       </div>
       <div className="col-6">
       <li>Humidity: 37%</li>
        <li>Wind: 23 km/h</li>
       </div>
     </div>
    </div>
    );
}