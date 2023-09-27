import React from 'react'
import img from '../imgs/pp.png'

export default function Main() {
  return (
    <div className="maincontent">
        <div className="headers">
            <h4>Welcome</h4>
            <h2>I Am Ahmed Sheikh</h2>
            <h1>I Am a Software engineer</h1>
        </div>
        <div className="profile">
            <div className="cover"></div>
            <img src={img} alt=""/>
        </div>
    </div>
  )
}
