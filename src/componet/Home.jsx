import React from 'react'
import img from "../Images/1.png";

const Home = () => {
  return (
    <div>
      <div className="home-container">
<div className="home-text">
<h1>GitHub Profile Explorer</h1>
<p>
Welcome to GitHub Profile Explorer! Explore GitHub user profiles and discover useful information about developers around the world.

This project uses React Router v7 loaders to fetch user data dynamically and display profile information in a clean and responsive interface.

Discover developer usernames, bios, followers, and more with ease.
</p>
<p>
Explore user information like username, bio, followers, and more in a

clean layout.
</p>
</div>
<div className="home-image">
<img src={img} alt="GitHub illustration" />
</div>
</div>
    </div>
  )
}

export default Home
