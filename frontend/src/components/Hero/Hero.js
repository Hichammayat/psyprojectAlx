import React from 'react'
import './Hero.css'


import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
        <div className='left-h'>
            
    {/*hero best ad*/}        
            <div className='the-best-ad'>
                <div></div>
                <span>Votre thérapie à votre rythme et
‍selon vos besoins</span>
            </div>
    {/*her text*/}       
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Votre psychologue en ligne,</span>
              </div>
              <div>
                <span>au quotidien</span>
              </div>
              <div>
                <span>Psynergy est une application de psychologie en ligne. Plusieurs fois par semaine, échangez par tchat avec votre psychologue, il vous répond en vidéo plusieurs fois par semaine.</span>
              </div>
            
            </div>
            {/* hero figures*/ }
            {/*<div className='figures'>
              <div>
                <span>+20</span>
                <span>expert</span>
              </div>
              <div>
                <span>150</span>
                <span>member joined</span>
              </div>
              <div>
                <span>20</span>
                <span>specialite</span>
              </div>
            </div>}
            {/*hero buttons*/ }
            <div className='hero-buttons'>
              {/*<button className='btn'>Download</button>*/}
              <Link to="/Signin">
              <button className='btn1'>Se connecter</button>
              </Link>

            </div>
        </div>
        
        <div className='right-h'>
          
        <video style={{backgroundSize:"cover",backgroundRepeat:"no-repeat"}} autoPlay loop muted playsInline className='video'>
              <source src='hero-section.mp4'/>
            </video>
      
        </div>

    </div>
  )
}

export default Hero
