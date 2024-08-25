import React from 'react'
import './Inscription.css'

const Inscription = () => {
  return (
    <div className='Inscription' id='inscription'>
        <div className='left-I'>
            <hr />
            <div>
                <span>Besoin de conseil de psychologue gratuit ? Découvrez les nombreux contenus et exercices de Delphine PY sur les réseaux sociaux !
Suivez Psynergy sur TikTok, Instagram, Twitter, ou abonnez-vous à notre newsletter pour ne rien rater de nos actualités.</span>
            </div>
            <div>   
                <span>Vous avez besoin de plus d’information ? Les réponses à vos questions se trouvent sûrement dans notre FAQ</span>
            </div> 
        </div>
        <div className='right-I'>
            <form className='email-container'>
                <input type="email" placeholder='Enter your email'></input>
                <button className='btn btn-I'>s'inscrire</button>
            </form>
        </div>
    </div>
  )
}

export default Inscription
