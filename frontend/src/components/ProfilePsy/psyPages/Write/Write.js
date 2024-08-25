import React from 'react'
import ReactQuill from "react-quill";
import {useDispatch} from "react-redux"
import "react-quill/dist/quill.snow.css";
import PostModals from '../../../../Modals/PostModals';
import { useState } from "react";
import { AddBlog } from '../../../../redux/Blog-reducer';
import'./Write.css'


const Write = () => {
    const dispatch = useDispatch()
    const getPsychiatreId = JSON.parse(localStorage.getItem('user'))
    console.log(getPsychiatreId._id);
    const [newblog,setNewblog] =useState({...new PostModals(), psychiatre_id : getPsychiatreId._id});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', newblog.image);
        formData.append('title', newblog.title);
        formData.append('desc', newblog.desc);
        formData.append('psychiatre_id', newblog.psychiatre_id);

        dispatch(AddBlog({ id: getPsychiatreId._id, formData: formData }));
    };
  return (
    <div className='add'>
        
        <div className='content'>
            <input type="text" placeholder='Title' onChange={(e) => setNewblog({...newblog, title : e.target.value})}/>
            <div className='editorContainer'>
            <textarea
            className="editor"
            placeholder="Tell your story..."
            type="text"
            onChange={(e)=> setNewblog({...newblog, desc : e.target.value})}
            />
            </div>
        </div>
        <div className='menu'>
            <div className='item'>
                <h1>Publish</h1>
                <span>
                    <b style={{color:"black"}}>Status:</b>Draft
                </span>
                <span>
                    <b style={{color:"black"}}>Visibility:</b>Public
                </span>
                <input  type="file" 
                id="file" 
                name="image"
                 onChange={(e)=> setNewblog({...newblog, image : e.target.files[0]})}></input>
                <label htmlFor='file'>Upload Image</label>
                <div className='buttons'>
                    <button className='btn-shild1' onClick={(e) =>handleSubmit(e)}>Save as a draft</button>
                    <button className='ntm-shild2'>Update</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Write
