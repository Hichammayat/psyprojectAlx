import React ,{useState}from 'react'
import './Auth.css'
import axios from'axios'
import SignupModal from '../../Modals/SignupModals'

import Footer from '../Footer/Footer'
import { Link,useNavigate } from 'react-router-dom'



function Authsec() {
  const [signup, setSignup] = useState(new SignupModal());
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate= useNavigate();
  const newAccount=()=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[A-Z])[a-zA-Z\d]{6,}$/;
    if (!emailRegex.test(signup.Email)) {
      setEmailError("Email n'est pas valide");
    } else if (!passwordRegex.test(signup.Password)) { 
      setPasswordError('Le mot de passe doit comporter au moins 6 caractères et une majuscule');
    }else {
      setEmailError('');
      setPasswordError('');
      axios.post('http://localhost:9000/register',signup)
      .then(res =>{return res.data})
      .catch(err => {return err});
    }
};

  return (
    <>
    <div className='auth'>
        <div className='a-left'>
          
            <div className='webname'>
            <video autoPlay loop muted playsInline className='video'>
              <source src='salut (1).mp4'/>
            </video>
            </div>
            
        </div>
        <div className='a-right'>
     <div className='info-form'>
         <h3>S'enregistrer</h3>
         {emailError && <div className="error"style={{color:'red'}}>{emailError}</div>}
         {passwordError && <div className="error" style={{color:"red"}}>{passwordError}</div>}
         <div>
         <input 
          onChange={(e) => {
            setSignup({ ...signup, Firstname: e.target.value });
          }}
          type='text'
          placeholder="first name"
          className='infoinput'
          name='firstname' />
          <input 
          onChange={(e) => {
            setSignup({ ...signup, Lastname: e.target.value });
          }}
          type='text'
          placeholder="last name"
          className='infoinput'
          name='lastname' />
         </div>
         <div>
         <input 
         onChange={(e) => {
          setSignup({ ...signup, Email: e.target.value });
        }}
         type="text"
         className='infoinput'
         name='Email'
         placeholder='Email'
         />
         
         </div>
         <div>
         <input 
         onChange={(e) => {
          setSignup({ ...signup, Password: e.target.value });
        }}
         type="Password" 
         className='infoinput'
         name='password'
         placeholder='Mot de pass'
         />
         
         

         </div>
         <div>
         <input 
         onChange={(e) => {
          setSignup({ ...signup, Occupation: e.target.value });
        }}
         type="text"
         className='infoinput'
         name='occupation'
         placeholder='occupation'
         />
         <input 
         onChange={(e) => {
          setSignup({ ...signup, Location: e.target.value });
        }}
         type="text"
         className='infoinput'
         name='location'
         placeholder='location'
         />

         </div>
         <div>
            <Link to="/Signin">
             <span className='span-form' style={{color:"white"}} >Vous avez déjà un compte? Connectez-vous</span>
             </Link>
         </div>
         <button onClick={() => {
             newAccount();
             navigate('/Signin')
             
             
            }} className=' infoButton'>S'inscrire</button>

         </div>
         </div>
        
        

    </div>
    <Footer/>
    </>
    
  )
}


export default Authsec
