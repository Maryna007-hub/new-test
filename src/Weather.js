import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="seatch" placeholder="Enter a city" 
            className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Searth" 
            className="btn btn-primary"/>
             </div>
            </div>
        </form>
     <h1>Lisbon</h1>
     <ul>
        <li>Monday 20:00</li>
        <li>Clear</li>
     </ul>
     <div className="row">
       <div className="col-6">
        <img src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png"
         alt="Clear"/> 18C|F 
       </div>
       <div className="col-6">
       <li>Humidity: 37%</li>
        <li>Wind: 23 km/h</li>
       </div>
     </div>
    </div>
    );
}