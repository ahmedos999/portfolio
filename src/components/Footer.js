import React from 'react'
import {AiFillBehanceCircle} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

export default function Footer() {
  return (
    <div>
        <footer>
            <h3>
                Thanks for visiting
            </h3>
            <h4>
                Feel free to contact me and view my other social accounts
            </h4>
            <div className="socials">
            <div className="footer-icon">
                <a href="https://www.behance.net/ahmedxosman"><AiFillBehanceCircle></AiFillBehanceCircle></a>
            </div>
            <div className="footer-icon">
                <a href="https://www.linkedin.com/in/ahmed-osman-61783223a/"><AiFillLinkedin></AiFillLinkedin></a>
            </div>
            <div className="footer-icon">
               <a href="https://github.com/ahmedos999"> <AiFillGithub></AiFillGithub></a>
            </div>
            </div>

        </footer>
    </div>
  )
}
