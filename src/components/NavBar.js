import React from 'react'

export default function NavBar() {
  return (
    <div className='nav'>
        <div className="logo">
            <h2>Ahmed</h2>
            <h3>Sheikh</h3>
        </div>
        <div className="navlist">
            <ul>
                <li className='active'>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact me</li>
            </ul>
        </div>
        <div className="cv">
            <a href={require("../imgs/cv.pdf")} download="myFile" className='button-50'>Download CV</a>
        </div>
    </div>
  )
}
