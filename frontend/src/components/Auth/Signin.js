import React,{useState} from 'react'
import './Auth.css'
import{useDispatch,useSelector} from'react-redux'
import {useNavigate} from "react-router-dom"
import { checkUser } from '../../redux/auth-reducer'
import { Link } from 'react-router-dom'
import { checkUserId} from '../../redux/Quest-reducer'
import Footer from '../Footer/Footer'

function Auth(props) {
const navigate = useNavigate();
const handleNavigation = props.handleNavigation
 
const Err = useSelector(state => state.Auth.Erreur)
const dispatch = useDispatch()
    const [signin, setSignin] = useState({
      Email:"",
      Password:""
    });
const Signin = () => {
  dispatch(checkUser({userAccount :signin })).then(
    res => {
      console.log(res.payload._id)
      if (typeof res.payload === 'object') {
        
        
        dispatch(checkUserId(res.payload._id) )
        .then(
         res => {
          console.log(res.payload)
            if (typeof res.payload === 'object')
             {handleNavigation("user")
              navigate('/PostSaved');
         }
            else {navigate('/Hellopage')}
          }
        )
      }
    }
  )
};
/*const Signin = () => {
      
  dispatch(checkUser({userAccount :signin })).then(
      res =>{
        console.log(res)

        if(typeof res.payload === 'object') navigate('/Information')
      }
    )
   };*/



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
        <h3>Sign in</h3>
        <p className='Err'  style={{color:"red"}}>{Err}</p>
        <div>
            <input 
            type="text"
            className='infoinput'
            name='Email'
            placeholder='Email'
            onChange={(e) => {
              setSignin({ ...signin,Email: e.target.value });
            }}
            />

        </div>
        <div>
            <input 
            type="password"
            className='infoinput'
            name='password'
            placeholder='Mot de pass'
            onChange={(e) => {
              setSignin({ ...signin,Password: e.target.value });
            }}
            />
            

        </div>
        <div>
            <Link to="/Signup">
            <span className='span-form' style={{color:"white"}} >Vous n'avez pas de compte? Inscrivez-vous.</span>
            </Link>
        </div>
        
        <button 
        onClick={() => {
          Signin()
         }}
        className=' infoButton'>se connecter</button>
        

    </div>
    
</div>
    </div>
    <Footer/>
    </>
  )
}


export default Auth
