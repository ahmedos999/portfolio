import React from 'react'
import img from '../imgs/mobile.png'
import img2 from '../imgs/web.png'

export default function Services() {
  return (
    <div className='service'>
        <h2>Services</h2>
        <p>Preview and browse my distinguished services</p>
        <div className="cards">
            <div className="card">
                <img src={img} alt="" />
                <h4>Mobile Applcations</h4>
                <p>Works on creating mobile application using the well known Flutter framework with the Dart programming language, with Bloc/provider for state managment</p>
            </div>
            <div className="card">
                <img src={img2} alt="" />
                <h4>Web Applcations</h4>
                <p>Works on creating web application using the well known React framework with the Java Script programming language, with redux for state managment</p>
            </div>
            <div className="card">
                <img src={img} alt="" />
                <h4>Front-end development</h4>
                <p>Works on Trasnforming each Design to code with HTML/CSS and javascript</p>
            </div>
            <div className="card">
                <img src={img} alt="" />
                <h4>ERP System</h4>
                <p>Works as applcation engnieer for ERP modules specialized on microsoft dynamics 365 business central</p>
            </div>
        </div>
    </div>
  )
}
