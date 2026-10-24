import React from 'react'
import img from "../Images/2.png";


const About = () => {
  return (
    <div>
      <div className="home-container">
<div className="home-text">
<h1>About Our Project</h1>
<p>
GitHub Profile Explorer is a React-based web application designed to explore GitHub user profiles.

The project demonstrates modern React concepts, including React Router v7, data loaders, component-based architecture, and dynamic data fetching.

Our goal is to make profile information easy to access through a simple, user-friendly interface.
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

export default About
