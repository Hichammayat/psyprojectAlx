import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
        <img  src='salut.png' alt='' className='logo' />
          <div className='social-links'>
          <FacebookIcon style={{color:"black", border:"solid",borderRadius:'50%',padding:"5px"}}/>
          <InstagramIcon style={{color:"black",border:"solid",borderRadius:'50%',padding:"5px"}}/>
          <LinkedInIcon style={{color:"black",border:"solid",borderRadius:'50%',padding:"5px"}}/>
          <span>MENTIONS LÉGALES</span>
          </div>
        </div>
    </div>
  )
}
export default Footer
