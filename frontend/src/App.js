import './App.css'
import Main from './components/Main/Main';
import {BrowserRouter , Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

import SideBar from './components/profile_User/Sidebar/SideBar';
import Chat from './components/profile_User/Sidebar/ProfilePages/message/Messages';
import ChatPsy from './components/ProfilePsy/psyPages/Chat/ChatPsy';

import PsyInscription from './components/PsyInscription/PsyInscription';
import LoginPsy from './components/PsyInscription/LoginPsy';
import Questionnaire from './components/Questionnaire/Questionnaire';
import Hellopage from './components/Questionnaire/HelloPage/Hellopage';
import Information from './components/profile_User/Sidebar/ProfilePages/information/Information';
import Blog from './components/Blog/Blog';
import BlogPsy from './components/ProfilePsy/psyPages/BlogPsy/BlogPsy';
import SinglePost from './components/Blog/SinglePost/SinglePost';
import Write from './components/ProfilePsy/psyPages/Write/Write';
import SideBarPsy from './components/ProfilePsy/SidebarPsy/SidebarPsy';
import PsyList from './components/profile_User/Sidebar/ProfilePages/psyList/PsyList';
import PostSaved from './components/profile_User/Sidebar/ProfilePages/PostSaved/PostSaved';
import Request from './components/ProfilePsy/psyPages/request/Request';
import Setting from './components/ProfilePsy/psyPages/setting/setting';
import AboutUs from './components/AboutUs/AboutUs';
import { useState } from 'react';



function App() {
const[userType,setUserType] =useState (localStorage?.getItem("userType") ? localStorage?.getItem("userType"): "");
  
const handleNavigation = (role) => {
    setUserType(role);
};
  return (
    
    <div className="App">
    <BrowserRouter>
     
     {userType === "" && (<Routes>
      <Route path="/" element={<Main/>} />
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path="/post/:_id" element={<SinglePost/>} />
      <Route path="/Signin" element={<Signin handleNavigation={handleNavigation}/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/PsyInscription" element={<PsyInscription/>} />
      <Route path="/LoginPsy" element={<LoginPsy handleNavigation={handleNavigation}/>} />
      <Route path="/Questionnaire" element={<Questionnaire handleNavigation={handleNavigation}/>} />
      <Route path="/Hellopage" element={<Hellopage/>} />
      <Route path="/Blog" element={<Blog/>} />
      
     </Routes>)
     
     }
     
     
     {userType === "user" && (<SideBar handleNavigation={handleNavigation}>
          <Routes>
            <Route path="/PsyList" element={<PsyList handleNavigation={handleNavigation} />} />
            <Route path="/Information" element={<Information/>} />
            <Route path="/Chat" element={<Chat/>} />
            <Route path="/Blog" element={<Blog/>} />
            <Route path="/PostSaved" element={<PostSaved/>} />
            
            
          </Routes>
        </SideBar>)}
        
     {userType === "psy" && (<SideBarPsy handleNavigation={handleNavigation}>
          <Routes>
            <Route path="/Write" element={<Write/>} />
            <Route path="/ChatPsy" element={<ChatPsy/>} />
            <Route path="/Request" element={<Request/>} />
            <Route path="/Setting" element={<Setting/>} />
            <Route path="/BlogPsy" element={<BlogPsy/>} />
          </Routes>
        </SideBarPsy>)}
        
     </BrowserRouter>
    </div>
    
  );
}

export default App;
