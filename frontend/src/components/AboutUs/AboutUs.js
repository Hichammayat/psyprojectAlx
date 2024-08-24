import React from 'react'
import './AboutUs.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className='AboutUs'>
        <div className='container-about'>
            <div className='Title-about'>
                <h1>about us</h1>
            </div>
            <div className='content-about'>
                <div className='article-about'>
                    <h3>Salut Mon Psy est une application de psychologie en ligne qui offre un accès facile,
                         abordable et efficace à des professionnels de la santé mentale. Nous sommes convaincus 
                         que tout le monde a le droit de bénéficier d'un soutien et d'un traitement psychologiques
                          de qualité, sans avoir à craindre la stigmatisation ou à se soucier des obstacles
                           financiers ou géographiques.

                        </h3>
                    <p>Nous croyons que la santé mentale est une partie essentielle de la santé globale et que la prévention
                         et le traitement des problèmes de santé mentale peuvent améliorer la qualité de vie et le bien-être
                          de chacun. Nous sommes honorés de pouvoir aider nos utilisateurs à trouver l'aide dont ils ont
                           besoin pour leur santé mentale et à mener une vie épanouissante et équilibrée.</p>
                    <div className='btn-about'>
                        <a href="">Read more</a>
                    </div>      
                </div>
            </div>
            <div className='image-section'>
                <img src='img Aboutus.jpeg'></img>
            </div>
           
        </div>
        <div className='social-icon'>
           <Footer/>
        </div>
        
    </div>
    
    </>
  )
}

export default AboutUs
