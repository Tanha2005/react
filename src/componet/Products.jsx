import React from 'react'
import img from "../Images/3.png";


const Products = () => {
  return (
    <div>
      <div className="home-container">
<div className="home-text">
      <h1>Explore Our Features</h1>

      <p>
        Discover the key features of GitHub Profile Explorer.
      </p>

      <ul>
        <li>
          <strong>Dynamic Data Fetching:</strong> Retrieve GitHub
          profile information using loaders.
        </li>
        <li>
          <strong>Profile Information:</strong> View usernames,
          bios, followers, and following counts.
        </li>
        <li>
          <strong>Smooth Navigation:</strong> Navigate between
          pages using React Router.
        </li>
        <li>
          <strong>Responsive Design:</strong> Enjoy a clean
          interface across different screen sizes.
        </li>
      </ul>

      <p>
        Explore these features and learn how React can be used
        to build modern web applications.
      </p>

</div>
<div className="home-image">
<img src={img} alt="GitHub illustration" />
</div>
</div>
    </div>
  )
}

export default Products
