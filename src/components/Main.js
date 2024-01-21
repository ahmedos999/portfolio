import React from 'react'
import img from '../imgs/pp.png'
import { motion } from 'framer-motion'





export default function Main() {

const imgVariants = {
  hover:{
    boxShadow:'rgba(15, 105, 136, 0.4) 5px 5px, rgba(3, 96, 117, 0.3) 10px 10px, rgba(33, 153, 174, 0.2) 15px 15px, rgba(37, 188, 202, 0.1) 20px 20px, rgba(32, 154, 170, 0.05) 25px 25px',
  }
}
  return (
    <div className="maincontent"  >
        <div className="headers">
            <h2>Welcome</h2>
            <h1>I Am a Software Engineer</h1>
            <p >My name is Ahmed Sheikh, I am 24 years old Software engineer,Sudan university Information technology Graduate
                Foucsed on Front-end development.
            </p>
            <p >Comfortable with Flutter framework,and developing my skills on React.js</p>
            <p >Always happy to learn new things</p>
        </div>
        <div className="profile" >
            <motion.div className="cover" 
            variants={imgVariants}
            whileHover="hover"><img src={img} alt="" className='box'/></motion.div>
        </div>
    </div>
  )
}
