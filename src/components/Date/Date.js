import React from "react";

import './Date.css';


const setDate = () => {
    
    let date = new Date();

    date = { 
        day: date.getDay(), 
        month: date.toLocaleString('default', { month: 'short' }).toUpperCase(), 
        year: date.getFullYear() 
    }

    return (
        <div className="Date">
            <div className="Day">
                <h3>{date.day}</h3>
            </div>
            <div className="monthAndYear">
                <div className="month">
                    <h3>{date.month}</h3>
                </div>
                <div className="year">
                    <h3>{date.year}</h3>
                </div>
            </div>
        </div>
    )
};


export default setDate;

