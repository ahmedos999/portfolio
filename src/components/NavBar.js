import React from 'react'
import { useTitle } from '../hooks/useTitle'

export default function NavBar() {
    useTitle('Ahmed portfolio')
  return (
    <div className='nav'>
        <div className="logo">
            <h2>Ahmed</h2>
            <h3>Sheikh</h3>
        </div>
        <div className="navlist">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
        </div>
        <div className="cv">
            <a href={require("../imgs/cv.pdf")} download="myFile" className='button-50'>Download CV</a>
        </div>
    </div>
  )
}
