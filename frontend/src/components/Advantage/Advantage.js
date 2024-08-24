import React from 'react'
import './Advantage.css'

function Advantage() {
  return (
    <div className='advantage' id="Advantage">
        <div className='advantage-Header'>
            <span className='stroke-text'>pourquoi</span>
            <span>une thérapie</span>
            <span className='stroke-text'>EN LIGNE</span>
        </div>
        <div className='advantage-details'>
            <div className='details'>
                <h1>Efficacité prouvée</h1>
                <span>L’efficacité des Thérapies Cognitives et Comportementales a été prouvée scientifiquement. Dépassez-vous grâce aux TCC</span>
            </div>
            <div className='details'>
                <h1>Échange psy</h1>
                <span>Des échanges quotidiens pour une meilleure alliance thérapeutique entre vous et votre psy.</span>
            </div>
            <div className='details'>
                <h1>Confidentialité garantie</h1>
                <span>La confidentialité est notre priorité : votre suivi se limite à vous et votre psy et toutes vos données sont 100% sécurisées.</span>
            </div>
            <div className='details'>
                <h1>Confort amélioré</h1>
                <span>Suivez votre thérapie depuis le confort de votre maison</span>
            </div>
            <div className='details'>
                <h1>Suivi personnalisé</h1>
                <span>Votre psy vous accompagne au quotidien, avec des exercices interactifs sur-mesure pour régler votre problématique.</span>
            </div>
            <div className='details'>
                <h1>Solution économique</h1>
                <span>Economisez de l’argent avec l’abonnement à petit prix, et gagner du temps sans RDV et sans déplacement.</span>
            </div>

        </div>
        
    </div>
  )
}

export default Advantage
