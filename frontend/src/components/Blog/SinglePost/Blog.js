import React,{useEffect, useState} from 'react'
import'./Blog.css'
import {useDispatch, useSelector} from "react-redux"
import { getAllposts } from '../../redux/Blog-reducer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import SinglePost from './SinglePost/SinglePost';


const Blog = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getAllposts())
    },[])
  const blogList = useSelector(state=>state.BlogStore.Blog)
    /*const posts = [
           {
             id: 1,
             title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
             img: "https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=600",
           },
           {
             id: 2,
             title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
             img: "https://images.pexels.com/photos/4101188/pexels-photo-4101188.jpeg?auto=compress&cs=tinysrgb&w=600",
           },
           {
             id: 3,
             title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
             img: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600",
           },
           {
             id: 4,
             title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
             desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
             img: "https://images.pexels.com/photos/6382633/pexels-photo-6382633.jpeg?auto=compress&cs=tinysrgb&w=600",
           },
        ];*/
  return (
    <>
    <Header/>
    <div className="Blog">
      <div className="posts">
        {blogList.map((post) => (
          <>
           
          <div className="post" key={post._id}>
            <div className="img-Blog">
              <img src={'http://localhost:9000/'+post.title+'/'+post.photo} alt="" />
            </div>
            <div className="post-content">
              
                <h1>{post.title}</h1>
              
              <p>{post.desc}</p>
              <Link to={`/post/${post._id}`}>
              
              <button>Read More</button>
              </Link>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
    
    </>
  )
};

export default Blog
