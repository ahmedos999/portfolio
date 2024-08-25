import {React,useRef} from 'react'

import { BiLogoFlutter } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiDynamics365 } from "react-icons/si";
import { motion } from 'framer-motion';

import { useInView } from 'framer-motion';


export default function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref,{ once: true })
   const containerVariants={
        start:{
            scale:0.5,
            opacity:0
        },
        end:{
            scale:1,
            opacity:1
        },
        transition:{
            duration:0.3,
            ease:'easeIn'
        }
    }
  return (
    <div className='service' ref={ref} id='services'>
        <h2>Services</h2>
        <p>Preview my distinguished services</p>
        {isInView && <div className="cards">
            <motion.div variants={containerVariants} initial="start" animate="end" className="card">
            <div className="icon"><BiLogoFlutter /></div>
                <h4>Mobile Applcations</h4>
                <p>Works on creating mobile application using the well known Flutter framework with the Dart programming language, with Bloc/provider for state managment</p>
            </motion.div>
            <motion.div variants={containerVariants} initial="start" animate="end" transition={{delay:0.3}} className="card">
            <div className="icon"><BiLogoReact/></div>
                <h4>Web Applcations</h4>
                <p>Works on creating web application using the well known React framework with the Java Script programming language, with redux for state managment</p>
            </motion.div>
            <motion.div variants={containerVariants} initial="start" animate="end" transition={{delay:0.6}} className="card">
                <div className="icon"><AiFillHtml5 /></div>
                <h4>Front-end development</h4>
                <p>Works on Trasnforming each UI/UX Design to code with HTML/CSS and javascript with responsive view for different devices</p>
            </motion.div>
            <motion.div variants={containerVariants} initial="start" animate="end" transition={{delay:0.9}} className="card">
            <div className="icon"><SiDynamics365 /></div>
                <h4>ERP System</h4>
                <p>Works as application engineer for ERP modules specialized on microsoft dynamics 365 business central, for supply chain, sales and Warehouse managment</p>
            </motion.div>
        </div>}
    </div>
  )
}
