import React from 'react'
import img from '../imgs/pp.png'

export default function Main() {
  return (
    <div className="maincontent">
        <div className="headers">
            <h3>Welcome</h3>
            <h1>I Am a Software engineer</h1>
            <p>I Am Ahmed Sheikh, Im 24 years old Software engineer,SUST Information technology Graduate
                Foucsed on Front-end development.
            </p>
            <p>Comfortable with Flutter framework,and developing my skills on React.js</p>
            <p>Always happy to learn new things</p>
        </div>
        <div className="profile">
            <div className="cover"></div>
            <img src={img} alt=""/>
        </div>
    </div>
  )
}
