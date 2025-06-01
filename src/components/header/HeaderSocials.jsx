import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mimansha-sharma-159068258/" target="__blank"><ImLinkedin/></a>
        <a href="https://github.com/mimansha11" target="__blank"><BsGithub/></a>
        <a href="https://x.com/Mimansha27?t=tx8xFOPer34ADQQZINruoA&s=09" target="__blank"><FaTwitter/></a> 
    </div>
  )
}


export default HeaderSocials