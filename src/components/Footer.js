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
                <AiFillBehanceCircle></AiFillBehanceCircle>
            </div>
            <div className="footer-icon">
                <AiFillLinkedin></AiFillLinkedin>
            </div>
            <div className="footer-icon">
                <AiFillGithub></AiFillGithub>
            </div>
            </div>

        </footer>
    </div>
  )
}
