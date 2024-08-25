import React, { useState } from 'react';
import './PsyInscription.css'

import PsyApplyModal from '../../Modals/PsyApplyModals'
import axios from'axios'

import { Link } from 'react-router-dom'

const PsyInscription = () => {
  const [fileCv,setFileCv] = useState()
  const [apply,setApply] =useState(new PsyApplyModal());
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
const getCv=()=>{
    const file =new FormData()
    file.append("resume", fileCv)
    axios.post('http://localhost:9000/getCv',file)
    .then(res =>{return res.data})
    .catch(err => {return err})
  }
const newPsy=()=>{
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
  if (!emailRegex.test(apply.Email)) {
    setEmailError("Email n'est pas valide");
  } else if (!passwordRegex.test(apply.Password)) { 
    setPasswordError('Le mot de passe doit comporter au moins 6 caractères et une majuscule');
  }else {
    setEmailError('');
    setPasswordError('');
    axios.post('http://localhost:9000/postuler',apply)
    .then(res =>{getCv()})
    .catch(err => {return err})
  }
    
};


  return (
    <div className='PsyInscription'>
       <div  className="info-Form" >
        <h3 style={{color:"white"}}>postuler ma candidature</h3>
        {emailError && <div className="error"style={{color:'red'}}>{emailError}</div>}
         {passwordError && <div className="error" style={{color:"red"}}>{passwordError}</div>}
        <div>
          <input
            onChange={(e) => {
              setApply({ ...apply, Firstname: e.target.value });
            }}
            type="text"
            placeholder="Prenom"
            name="firstname"
            className="infoinput"
          />
          <input
            onChange={(e) => {
              setApply({ ...apply, Lastname: e.target.value });
            }}
            type="text"
            placeholder="Nom"
            name="lastname"
            className="infoinput"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            name="Email"
            className="infoinput"
            onChange={(e) => {
              setApply({ ...apply, Email: e.target.value });
            }}
          />
        </div>
        <div>
         <input 
         onChange={(e) => {
          setApply({ ...apply, Password: e.target.value });
        }}
         type="Password"
         className='infoinput'
         name='password'
         placeholder='Mot de pass'
         />
         

         </div>

        <div>
          <input
            type="text"
            placeholder="habite à"
            name="livesIn"
            className="infoinput"
            onChange={(e) => {
              setApply({ ...apply,Location : e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Pays"
            name="country"
            className="infoinput"
            onChange={(e) => {
              setApply({ ...apply,Occupation : e.target.value });
            }}
          />
        </div>

        

        <div style={{color:"white"}}>
          Votre CV
          <input 
            type="file"
            name="resume"
            onChange={(e)=> setFileCv(e.target.files[0])} />
         
        </div>
        <div>
            <Link to="/LoginPsy">
             <span className='span-form' style={{color:"white"}} >Vous avez déjà un compte? Connectez-vous</span>
             </Link>
         </div>

        <button 
          className="button infoButton"
          type="submit"
          onClick={()=>newPsy()} >
          Postuler
        </button>
      </div>
    </div>
  )
}

export default PsyInscription
