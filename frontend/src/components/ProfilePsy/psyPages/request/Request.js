import React, { useEffect ,useState} from 'react'
import'./request.css'
import {useDispatch,useSelector} from "react-redux"
import { getNotif,DLTNotif } from '../../../../redux/notifyer'
import { newConversation } from '../../../../redux/conversation-reducer'



const Request = () => {
  const dispatch = useDispatch()
  const { notifications, users } = useSelector((state) => state.Notification.Notification);
  
  console.log(notifications)
  console.log(users)
  const getPsyId = JSON.parse(localStorage.getItem ('user'));
   useEffect(()=>{
    dispatch(getNotif({psychiatre_id:getPsyId._id}))
  },[]);
  const handleValider = (notification) => {
    const conversation = {
      user_id: notification.user_id,
      psychiatre_id: getPsyId._id
    };
    dispatch(newConversation({ Conversation: conversation }));
  };
  
  
  return (
    <div className='request-div'>
      {notifications?notifications.map(notification => {
        const user = users.find(user => user._id === notification.user_id);
        const userName = user ? user.Firstname : "";
        const lastname =user ? user.Lastname : "";
        return (
          <div key={notification._id} className="container">
            <div className="card">
              <div className='top-card'>
                <img className='img-card' src="profile pic.png"></img>
              </div>
              <div className='info-card'>
                
                <h3>{userName} {lastname}</h3>
              </div>
              <div className='button-card'>
                <button style={{ border: "green", color: "green" }} onClick={() => handleValider(notification)}>
                  valider
                </button>
                <button style={{ border: "red", color: "red" }}
                onClick={() =>dispatch(DLTNotif({id:notification._id}))}
                >refuser</button>
              </div>
            </div>
          </div>
        )
      }):null}
    </div>
  )
}

export default Request
