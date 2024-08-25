import React from 'react'
import './Menu.css'

const Menu = () => {
    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/4101188/pexels-photo-4101188.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        
     ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post-suggest" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
