import React from 'react'
import img from '../imgs/mobile mockup.png'
export default function Work() {
  return (
    <div className='work'>
        <h2>Projects</h2>
        <div className="project-card">
            <img src={img} alt="" className="" />
            <div>
            <h2>E-commarce Mobie application</h2>
            <p>Mobile applcation for shopping from your mobile applcation with all the necessary function</p>
            <a href="">Project Preview Link</a>
            </div>
        </div>
    </div>
  )
}
