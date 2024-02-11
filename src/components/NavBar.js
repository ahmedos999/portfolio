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
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#socials">Socials</a></li>
            </ul>
        </div>
        <div className="cv">
            <a href={require("../imgs/cv.pdf")} download="myFile" className='button-50'>Download CV</a>
        </div>
    </div>
  )
}
