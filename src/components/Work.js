import React from 'react'
import img from '../imgs/test.png'
export default function Work() {
  return (
    <div className='work'>
        <h2>Projects</h2>
        <div className="project-card">
            <img src={img} alt="" className="" />
            <div>
            <h2>E-commarce Mobie application</h2>
            <p>Mobile applcation for shopping from your mobile applcation with all the necessary function</p>
            <p>projects use Riverpod for state managment soluation with 10 diffrent screen, data is fetch from local json file in project</p>
            <a href="">Project Preview Link</a>
            </div>
        </div>
    </div>
  )
}
