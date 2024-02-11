import {React,useRef} from 'react'
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
import { motion } from 'framer-motion';

import { useInView } from 'framer-motion';


export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref,{ once: true })

  return (
    
    <>
    <div className='highlight' id='about'>
       <ul>
        <li><FaHtml5/> HTML</li>
        <li><FaCss3 /> CSS</li>
        <li><SiTailwindcss /> Tailwind</li>
        <li><FaBootstrap /> Bootstrap</li>
        <li><DiJqueryLogo /> JQuery</li>
        <li><SiDart /> Dart</li>
        </ul>
      </div>
    <div className='About' ref={ref}>
        
        <h2>About Me</h2>
        <p>I am software engnieer who is passionate about coding and creating digital content, I always looking to learn about new technologies, love new challanges and ways to improve my skills</p>
        {isInView && <div className="indcators">
          {/* 333 167*/}
        <motion.div  initial={{x:333, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1, duration:0.5,ease: "easeOut"}}><CircularProgressbar value={80} maxValue={100} text='Dart' /></motion.div>
        <motion.div initial={{x:167, opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1, duration:0.5,ease: "easeOut"}}><CircularProgressbar value={60} maxValue={100} text='Java Script' /></motion.div>
        <motion.div initial={{x:0}} animate={{x:0}} transition={{delay:1.5, duration:0.5}}><CircularProgressbar value={50} maxValue={100} text='Java' /></motion.div>
        <motion.div initial={{x:-167, opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1.5, duration:0.5,ease: "easeOut"}}><CircularProgressbar value={80} maxValue={100} text='HTML/CSS' /></motion.div>
        <motion.div initial={{x:-333, opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1.5, duration:0.5,ease: "easeOut"}}><CircularProgressbar value={60} maxValue={100} text='SQL' /></motion.div>
        </div>}
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
