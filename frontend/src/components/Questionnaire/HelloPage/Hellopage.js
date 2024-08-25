import React from 'react'
import './Hellopage.css'
import { Link } from 'react-router-dom'

function Hellopage() {
  return (
    <div className='Questionnaire'>
        <div className='question-form'>
          <div className='top-section'>
            <span>Bienvenue sur Salut Mon Psy ! Nous sommes heureux de vous accueillir et de vous aider à 
              améliorer votre bien-être mental. Pour commencer, nous vous invitons à répondre à quelques
               questionnaires qui nous permettront de mieux comprendre vos besoins et de vous offrir des 
               conseils personnalisés et adaptés à votre situation.
           </span>
            </div>
          <div className='bottom-section'>
            <Link to="/Questionnaire">
            <button className='btn'>commencer</button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Hellopage
