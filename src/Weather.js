import React from "react";
import "./Weather.css";
import  WeatherIcon  from "./WeatherIcon";
export default function Weather() {
    return (
    <div className="Weather">
        <form>
            <div className="row">
               <div className="col-9">
            <input type="search" placeholder="Enter a city" 
            className="form-control"
            autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Searth" 
            className="btn btn-primary w-100"/>
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
     
            <WeatherIcon/>


                    <span className="temperature">18</span>
                     <span className="unit">C|F</span>
                
             </div>
   
       
       <div className="col-6">
          <li>Humidity: 37%</li>
        <li>Wind: 23 km/h</li>
          </div>
     </div>
    
     </div>
    );
}