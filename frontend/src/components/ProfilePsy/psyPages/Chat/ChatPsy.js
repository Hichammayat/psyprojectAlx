import React,{useState,useEffect} from 'react';
import './ChatPsy.css';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { MdMessage } from "react-icons/md";
import {FaUser } from "react-icons/fa";
import{useDispatch,useSelector} from'react-redux';
import { getConversation } from '../../../../redux/conversation-reducer';
import {addMessage} from '../../../../redux/message-reducer';
import { getmessage } from '../../../../redux/message-reducer';
import MessageModal from '../../../../Modals/MessageModals';

import InputEmoji from 'react-input-emoji';


function ChatPsy() {
  const [newMessage, setNewMessage] = useState(new MessageModal());
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const dispatch = useDispatch();
  const { conversations, users } = useSelector(
    (state) => state.ConversationStore.Conversation
  );
  const message = useSelector((state) => state.MessageStore.Message);
  console.log(message)
  const getPsyId = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getConversation({ psychiatre_id: getPsyId._id }));
    
  }, []);
  useEffect(()=>{
    if (selectedConversationId) {
      dispatch(getmessage({conversationID: selectedConversationId}))
    }
  },[selectedConversationId]);

  const [chatHeaderName, setChatHeaderName] = useState("");
  

  const handleConversationClick = (conversation) => {
    const user = users.find((user) => user._id === conversation.user_id);
    const userName = user ? user.Firstname : "";
    const lastname = user ? user.Lastname : "";
    setChatHeaderName(`${userName} ${lastname}`);
    setSelectedConversationId(conversation._id);
  };
   return (
  <>
    <div className="Left-side-chat">
     <div className="Chat-container">
        <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
          <ManageSearchIcon />
          </div>
      </div>
          <div className="Chat-list">
          <div className='Conversation'>
      {conversations?conversations.map(conversation => {
        const user = users.find(user => user._id === conversation.user_id);
        const userName = user ? user.Firstname : "";
        const lastname = user ? user.Lastname : "";
        return (
          <>
					<div className="contact-section" key={conversation._id} onClick={() => handleConversationClick(conversation)}>
						<li className="list__item">
							
							<p className="relationship">{userName} {lastname}</p>
						</li>
	          <li className="list__item">
               <img
                    src="profile pic.png"
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px",borderRadius:"50%" }}
                  />
           <i className="fas fa-phone" ><MdMessage style={{ width: "30px", height: "30px", }}/></i>
						</li>
					</div>
          <hr />
          </>
				 )
      }):null}
    </div>
         </div>
        </div>
      </div>
      {selectedConversationId && (
      <div className="ChatBox-container" >
        <>
            {/* chat-header */}
            <div className="chat-header" style={{backgroundColor:"black",color:"white"}}>
              <div className="follower">
                <div className="header-name" style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"3rem"}}>
                  <img
                    src="profile pic.png"
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px",borderRadius:"50%" }}
                  />
                  <div className="name" >
                    <span>
                    {chatHeaderName}
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
               {message.length > 0 ? (
                  message.map((item) => (
                    <div key={item._id}>
                      {item.sender === getPsyId._id ?(
                      <p style={{ color: 'black', textAlign: 'right' }}>{item.content}</p>) :
                      (<p style={{ color: 'black', textAlign: 'left' }}>{item.content}</p>)
                     }
                    </div>
                  ))
                ) : (<p>No messages found.</p>)}
            </>
             </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div >+</div>
              <InputEmoji
              onChange={(e)=> setNewMessage({
                ...newMessage,
                content: e,
                conversationId: selectedConversationId._id,
                sender: getPsyId._id,
              })}
              />
              <SendIcon 
              onClick={() =>dispatch(addMessage({Message:newMessage}))}
              style={{color:"white"}}/>
              <AttachFileIcon style={{color:"white"}}
                type="file"
                name=""
                id=""
               />
            </div>{" "}
          </>
      </div>
      )}
    </>
    )
}

export default ChatPsy
