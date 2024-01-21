import React from 'react'
import img from '../imgs/pp.png'
import { motion } from 'framer-motion'





export default function Main() {

const imgVariants = {
  hover:{
    boxShadow:'rgba(15, 105, 136, 0.4) 5px 5px, rgba(3, 96, 117, 0.3) 10px 10px, rgba(33, 153, 174, 0.2) 15px 15px, rgba(37, 188, 202, 0.1) 20px 20px, rgba(32, 154, 170, 0.05) 25px 25px',
  },
  initial:{
    boxShadow:'none'
  },
  visible:{
    boxShadow:' rgba(19, 136, 175, 0.4) 5px 5px, rgba(4, 126, 153, 0.3) 10px 10px, rgba(46, 211, 240, 0.2) 15px 15px, rgba(46, 224, 240, 0.1) 20px 20px, rgba(46, 217, 240, 0.05) 25px 25px'
  }
}

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
            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" transition={{delay:0.4,duration:0.5,stiffness:500}}>I Am a Software Engineer</motion.h1>
            <motion.p variants={containerVariants} initial="hidden" animate="visible" transition={{delay:0.6,duration:0.5,stiffness:500}}>My name is Ahmed Sheikh, I Software engineer,Sudan university Information technology Graduate
                Foucsed on Front-end development.
            </motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible" transition={{delay:0.8,duration:0.5,stiffness:500}}>Comfortable with Flutter framework,and developing my skills on React.js</motion.p>
            <motion.p variants={containerVariants} initial="hidden" animate="visible" transition={{delay:1,duration:0.5,stiffness:500}}>Always happy to learn new things</motion.p>
        </div>
        <div className="profile" >
            <motion.div className="cover" 
            variants={imgVariants}
            initial="hidden"
            animate="visible"
            transition={{duration:1.5,delay:0.5,repeat:Infinity}}
            whileHover="hover"><img src={img} alt="" className='box'/></motion.div>
        </div>
    </div>
  )
}
