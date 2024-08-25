import React,{useEffect, useState} from 'react'
import"./PsyList.css"
import NotificationModal from '../../../../../Modals/Notification'
import {useDispatch, useSelector} from "react-redux"
import { GetPsychiatreList } from '../../../../../redux/psy-reducer'
import { SendNotif } from '../../../../../redux/notifyer'

const PsyList = () => {
  const dispatch = useDispatch()
  
  const getUserId = JSON.parse(localStorage.getItem('user'))
    useEffect(() =>{
    dispatch(GetPsychiatreList())
    },[])
    const [selectedItem, setSelectedItem] = useState(null);  
const psychiatreList = useSelector(state => state.PsyInscription.psychiatre)
const handleValider = (item) => {
  const notification = {
    user_id: getUserId._id,
    psychiatre_id: item._id
  };
  dispatch(SendNotif({ Notif: notification })).then(() => {
    setSelectedItem(item);
  });;
};

console.log(psychiatreList)
  return (
    <>
    
    <div className="List-profile">
      <div className="Profils">
      {
        
        psychiatreList.map(item =>( 
          <div className="Profile" key={item._id} >
            <div className="img">
              <img src="profile pic.png"  alt="" />
            </div>
            <div className="Profile-content">
             <h1>{item.Firstname}  {item.Lastname}</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
             <button
             onClick={() => handleValider(item)}
              
              >choisir ce psychologue</button>
            {selectedItem && selectedItem._id === item._id && (
                  <div className="Alert">
                    <p>félicitation pour votre choix !</p>
                  </div>
                  

                )}
            </div>
          </div>
          ))
          }
          
      </div>
    </div>
    
    
    </>
  )
}

export default PsyList
