import React from 'react'
import { Link,Outlet } from "react-router-dom";
const Product = () => {
  return (
    <div>
<h2>Products Page</h2>
<nav>
<Link to="phones">Phones</Link> |{" "}
<Link to="laptops">Laptops</Link> |{" "}
<Link to="camera">Camera</Link>
</nav>
{/* ❌ No Outlet → child categories will NOT render */}
</div>
  )
}

export default Product

