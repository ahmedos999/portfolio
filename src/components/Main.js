import React from 'react'
import img from '../imgs/pp.png'
import { gsap } from "gsap";
import { useLayoutEffect,useRef } from 'react';




export default function Main() {
const comp = useRef(null)
 useLayoutEffect(()=>{
  let ctx = gsap.context(()=>{
    const t1 = gsap.timeline()

  t1.from('.box',{
    y:'-70%',
    opacity:0,
    duration:0.8,
    delay:0.2
  }).from('.title-1',{x:'-50%,',duration:0.6,opacity:0,ease:'power2.in'})
  .from('.title-2',{x:'-50%,',duration:0.6,opacity:0,ease:'power2.in'})
  .from('.title-3',{duration:0.6,opacity:0,ease:'power2.in'})
  .from('.title-4',{duration:0.6,opacity:0,ease:'power2.in'})
  .from('.title-5',{duration:0.6,opacity:0,ease:'power2.in'})
  },comp)
  

  return ()=> ctx.revert()
 },[])

  return (
    <div className="maincontent" ref={comp} >
        <div className="headers">
            <h2 className='title-1'>Welcome</h2>
            <h1 className='title-2'>I Am a Software Engineer</h1>
            <p className='title-3'>My name is Ahmed Sheikh, I am 24 years old Software engineer,Sudan university Information technology Graduate
                Foucsed on Front-end development.
            </p>
            <p className='title-4'>Comfortable with Flutter framework,and developing my skills on React.js</p>
            <p className='title-5'>Always happy to learn new things</p>
        </div>
        <div className="profile" >
            <div className="cover"><img src={img} alt="" className='box'/></div>
        </div>
    </div>
  )
}
