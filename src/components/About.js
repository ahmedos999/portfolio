import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function About() {
  return (
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
  )
}
