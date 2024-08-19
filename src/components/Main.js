import React, { useEffect, useState } from 'react'
import img from '../imgs/pp.png'
import { motion } from 'framer-motion'
import {ReactTyped} from "react-typed";





export default function Main() {

  
  const [title,setTitle] = useState('Software Engineer')
  
  useEffect(()=>{
    const titles = ['Software Engineer','Front-End Developer','Flutter Developer','React Developer']
    var count = 0
    setInterval(()=>{
      count++
      count = count % 4
      setTitle(()=>titles[count])
    },4500)
  },[])
  

const containerVariants = {
  hidden:{
    x:"-100vw",
    opacity:0
  },
  visible:{
    x:0,
    opacity:1
  }
}
  return (
    <div className="maincontent">
        <div className="headers">
            <motion.h2 variants={containerVariants} initial="hidden" animate="visible" transition={{delay:0.2, duration:0.5, stiffness:500}}>Welcome</motion.h2>
            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" transition={{delay:0.4,duration:0.5,stiffness:500}} ><div >I Am a <ReactTyped strings={[title]} typeSpeed={120} /></div></motion.h1>
            <motion.p variants={containerVariants} initial="hidden" animate="visible" transition={{delay:0.6,duration:0.5,stiffness:500}}>My name is Ahmed Sheikh, I Software engineer, Sudan university Information technology Graduate
                Foucsed on Full-Stack development.
            </motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible" transition={{delay:0.8,duration:0.5,stiffness:500}}>Comfortable with Flutter framework, React.js, Next.js and MERN Stack</motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible" transition={{delay:1,duration:0.5,stiffness:500}}>Always happy to learn new things</motion.p>
        </div>
        <div className="profile" >
            <div className="cover" 
            ><img src={img} alt="" className='box'/></div>
        </div>
    </div>
  )
}
