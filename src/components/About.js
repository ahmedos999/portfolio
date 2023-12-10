import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { SiDart } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
export default function About() {
  return (
    
    <>
    <div className='highlight'>
       <ul>
        <li><FaHtml5/> HTML</li>
        <li><FaCss3 /> CSS</li>
        <li><SiTailwindcss /> Tailwind</li>
        <li><FaBootstrap /> Bootstrap</li>
        <li><DiJqueryLogo /> JQuery</li>
        <li><SiDart /> Dart</li>
        </ul>
      </div>
    <div className='About'>
        
        <h2>About Me</h2>
        <p>I am software engnieer who is passionate about coding and creating digital content, I always looking to learn about new technologies, love new challanges and ways to improve my skills</p>
        <div className="indcators">
        <CircularProgressbar value={80} maxValue={100} text='Dart' />
        <CircularProgressbar value={60} maxValue={100} text='Java Script' />
        <CircularProgressbar value={50} maxValue={100} text='Java' />
        <CircularProgressbar value={80} maxValue={100} text='HTML/CSS' />
        </div>
    </div>

    <div className='highlight'style={{transform: 'rotate(-2deg)'}}>
       <ul>
        <li><RiFlutterFill/> Flutter</li>
        <li><FaReact /> React</li>
        <li><SiNextdotjs /> Next js</li>
        <li><FaVuejs /> Vue</li>
        <li><SiSqlite /> SQLite</li>
        <li><IoLogoFirebase /> Firebase</li>
        </ul>
      </div>
    </>
  )
}
