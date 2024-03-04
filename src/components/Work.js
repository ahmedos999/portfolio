import React from 'react'
import img from '../imgs/project-1.png'
import img2 from '../imgs/project-2.png'
// import img3 from '../imgs/project-3.png'
import img4 from '../imgs/project-4.png'
import img5 from '../imgs/project-5.png'
import img6 from '../imgs/project-6.jpg'
import img7 from '../imgs/project-7.png'

export default function Work() {
  return (
    <div className='work' id='projects'>
        <h2>Projects</h2>
        <p>Explore my various project i have been working on</p>
        <div className="grid">
        <div className="project-card">
            <img src={img} alt="" />
            <h2>E-commarce Mobie application</h2>
            <p>Mobile applcation for shopping from your mobile application with all the necessary function, project uses Flutter framework with Riverpod for state managment soluation with 10 diffrent screen, data is fetch from local json file in project</p>
            <ul className='skills'>
                <li>Flutter</li>
                <li>Dart</li>
                <li>Riverpod</li>
            </ul>

            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>

        </div>
        <div className="project-card">
            <img src={img2} alt="" />
            <h2>Pharma Mobie application</h2>
            <p>Mobile applcation for shopping from your mobile application with all the necessary function, project uses Flutter framework with Riverpod for state managment soluation with 10 diffrent screen, data is fetch from local json file in project</p>
            <ul className='skills'>
                <li>Flutter</li>
                <li>Dart</li>
                <li>Provider</li>
            </ul>

            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>

        </div>
        {/* <div className="project-card">
            <img src={img3} alt="" />
            <h2>Real Estate Mobie application</h2>
            <p>project use flutter toolkit to design this UI with best practices, project use flutter toolkit to design this UI with best practices</p>
            <ul className='skills'>
                <li>Flutter</li>
                <li>Dart</li>
                <li>Provider</li>
            </ul>

            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>

        </div> */}
        <div className="project-card">
            <img src={img4} alt="" />
            <h2>E-commarce Web application</h2>
            <p>Web application project use React framework with all the basic React hooks 5 diffrent screen, data is fetch from local json file in project</p>
            <ul className='skills'>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>

        </div>
        <div className="project-card">
            <img src={img5} alt="" />
            <h2>Dashboard Design</h2>
            <p>Front end project use HTML / CSS and Tailwind to Create a Dashboard with charts display, Using CSS grid system for the layout</p>
            <ul className='skills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
            </ul>
            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>

        </div>
        <div className="project-card">
            <img src={img6} alt="" />
            <h2>Car rental Mobile application</h2>
            <p>Mobile application project use Flutter framework with Bloc pattren to create well designed UI for car rental mobile application with all the features and JSON files for data manipulation</p>
            <ul className='skills'>
                <li>Flutter</li>
                <li>Dart</li>
                <li>Bloc</li>
                <li>Provider</li>
            </ul>
            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>

        </div>
        <div className="project-card">
            <img src={img7} alt="" />
            <h2>E-commerce web application Front-end</h2>
            <p>Web application project use Next.js framework with Redux to Transform UI into front-end web application with all the features, Tailwind inline styles and Redux for state managment soluation</p>
            <ul className='skills'>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Redux</li>
            </ul>
            <a href='https://www.behance.net/gallery/190197161/E-commerce-web-application-Front-end?' className='button-50'>Project Preview Link</a>

        </div>
        </div>




        {/* <div className="project-card">
            <img src={img} alt="" className="" />
            <div>
            <h2>E-commarce Mobie application</h2>
            <p>Mobile applcation for shopping from your mobile application with all the necessary function</p>
            <p>project uses Flutter framework with Riverpod for state managment soluation with 10 diffrent screen, data is fetch from local json file in project</p>
            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>
            </div>
        </div>
        <div className="project-card-l">
            <img src={img2} alt="" className="" />
            <div>
            <h2>Pharma Mobie application</h2>
            <p>Mobile for Pharmacy managment system</p>
            <p>It's a mobile applcation for pharmacy customers to view and buy medicines with ease</p>
            <p>project use flutter framework with Provider for state managment soluation with 8 diffrent screen, The application is connected with backend through APIs to comnunicate data</p>
            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>
            </div>
            
            
        </div>
        <div className="project-card">
            <img src={img3} alt="" className="" />
            <div>
            <h2>Real Estate Mobie application</h2>
            <p>Mobile applcation UIUX desgin transformed to code</p>
            <p>project use flutter toolkit to design this UI with best practices</p>
            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>
            </div>
        </div>
        <div className="project-card-l">
            <img src={img4} alt="" className="" />
            <div>
            <h2>E-commarce Web application</h2>
            <p>Web applcation for shopping from your with all the necessary function</p>
            <p>project use React framework with all the basic React hooks 5 diffrent screen, data is fetch from local json file in project</p>
            <a href='https://www.behance.net/ahmedxosman' className='button-50'>Project Preview Link</a>
            </div>
        </div> */}
    </div>
  )
}
