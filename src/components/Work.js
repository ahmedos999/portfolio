import React from 'react'
import img from '../imgs/project-1.png'
import img2 from '../imgs/project-2.png'
import img3 from '../imgs/project-3.png'
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
            <a className='button-50'>Project Preview Link</a>
            </div>
        </div>
        <div className="project-card-l">
            <img src={img2} alt="" className="" />
            <div>
            <h2>E-commarce Mobie application</h2>
            <p>Mobile applcation for shopping from your mobile applcation with all the necessary function</p>
            <p>projects use Riverpod for state managment soluation with 10 diffrent screen, data is fetch from local json file in project</p>
            <a className='button-50'>Project Preview Link</a>
            </div>
            
            
        </div>
        <div className="project-card">
            <img src={img3} alt="" className="" />
            <div>
            <h2>E-commarce Mobie application</h2>
            <p>Mobile applcation for shopping from your mobile applcation with all the necessary function</p>
            <p>projects use Riverpod for state managment soluation with 10 diffrent screen, data is fetch from local json file in project</p>
            <a className='button-50'>Project Preview Link</a>
            </div>
        </div>
    </div>
  )
}
