import React from 'react'

import { BiLogoFlutter } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiDynamics365 } from "react-icons/si";



export default function Services() {
  return (
    <div className='service'>
        <h2>Services</h2>
        <p>Preview and browse my distinguished services</p>
        <div className="cards">
            <div className="card">
            <div className="icon"><BiLogoFlutter /></div>
                <h4>Mobile Applcations</h4>
                <p>Works on creating mobile application using the well known Flutter framework with the Dart programming language, with Bloc/provider for state managment</p>
            </div>
            <div className="card">
            <div className="icon"><BiLogoReact/></div>
                <h4>Web Applcations</h4>
                <p>Works on creating web application using the well known React framework with the Java Script programming language, with redux for state managment</p>
            </div>
            <div className="card">
                <div className="icon"><AiFillHtml5 /></div>
                <h4>Front-end development</h4>
                <p>Works on Trasnforming each UI/UX Design to code with HTML/CSS and javascript with responsive view for different devices</p>
            </div>
            <div className="card">
            <div className="icon"><SiDynamics365 /></div>
                <h4>ERP System</h4>
                <p>Works as applcation engnieer for ERP modules specialized on microsoft dynamics 365 business central, for supply chain, sales and Warehouse managment</p>
            </div>
        </div>
    </div>
  )
}
