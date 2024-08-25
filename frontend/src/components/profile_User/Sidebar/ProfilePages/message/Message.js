import React,{useState,useEffect} from 'react'
import './Messages.css'
import SendIcon from '@mui/icons-material/Send';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import{useDispatch,useSelector} from'react-redux'
import { getConversationPsy } from '../../../../../redux/conversation-reducer';
import { getmessage } from '../../../../../redux/message-reducer';
import { addMessage } from '../../../../../redux/message-reducer';
import MessageModal from '../../../../../Modals/MessageModals';

import SideBar from '../../SideBar';

import InputEmoji from 'react-input-emoji'



function Chat() {
  
  const [newMessage,setNewMessage] =useState( {...new MessageModal()});
  const dispatch = useDispatch()
  const { conversations,psychiatre } = useSelector((state) => state.ConversationStore.Conversation);
  const message = useSelector((state)=>state.MessageStore.Message)
  console.log(message)
  const getUserId =  JSON.parse(localStorage.getItem ('user'));
  
  useEffect(()=>{
    
    dispatch(getConversationPsy({userId:getUserId._id}))
  },[]);
 /* useEffect(() => {
    if (conversations && conversations.length > 0) {
      const conversation = conversations[0];
      dispatch(getmessage({ conversationID: conversation._id }));
    }
  }, []);*/
  useEffect(() => {
    const conversationId = JSON.parse(localStorage.getItem('conversationId'));
    if (conversationId) {
      dispatch(getmessage({ conversationID: conversationId }));
    } else if (conversations && conversations.length > 0) {
      const conversation = conversations[0];
      localStorage.setItem('conversationId', JSON.stringify(conversation._id));
      dispatch(getmessage({ conversationID: conversation._id }));
    }
  }, [conversations]);
    return (
  <>
    <div className='chat-page'>
     {conversations?conversations.map((conversation)=>{
      const psychiatrist = psychiatre.find(
        (psy) => psy._id === conversation.psychiatre_id
      );
      const psychiatristName = psychiatrist? psychiatrist.Firstname: "";
      const psylastname = psychiatrist? psychiatrist.Lastname: "";
      
      return (
     <div className='chat-page' key={conversation._id}>
      <div className="ChatBox-container" > 
         <>
            {/* chat-header */}
            <div className="chat-header" style={{backgroundColor:"black",color:"white"}}>
              <div className="follower">
                <div className="header-name" style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"3rem"}}>
                  <img
                    src="DSC_2342.jpg"
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px",borderRadius:"50%" }}
                  />
                  <div className="name" >
                    <span >
                    {psychiatristName} {psylastname}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
               <>
               {
                 message.length > 0 ? (
                  message.map((item) => (
                    <div key={item._id}>
                      {item.sender === getUserId._id ?(
                      <p style={{ color: 'black', textAlign: 'right' }}>{item.content}</p>) :
                      (
                        <p style={{ color: 'black', textAlign: 'left' }}>{item.content}</p>)
                     }
                    </div>
                  ))
                ) : (
                  <p>No messages found.</p>
                )}
                      
                </>
             </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div >+</div>
              <InputEmoji
               value={newMessage.content}
               onChange={(e)=> setNewMessage({
                ...newMessage,
                content: e,
                conversationId: conversation._id,
                sender: getUserId._id,
              })}
              />
              <SendIcon  onClick={() =>{dispatch(addMessage({Message:newMessage}));
                  setNewMessage({ ...new MessageModal() });}} style={{color:"white"}} />
              <AttachFileIcon style={{color:"white"}}
                type="file"
                name=""
                id=""
              />
            </div>{" "}
          </>
       </div>
      </div>)}):null}
      </div>
    </>
    )
}
export default Chat
