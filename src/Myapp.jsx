import React from 'react'
import Home from './componet/Home'
import About from './componet/About'
import Products from './componet/Products'
import Profile from './componet/Profile'



import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <header>
                <h1>Developer Profile Explorer</h1>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/products">Products</Link> |{" "}
                    <Link to="/about">About</Link> |{" "}
                    <Link to="/profile" prefetch="intent">Profile</Link>
                </nav>
            </header>

            <main>
                <Outlet /> {/* Child routes render here */}
            </main>
            <footer>
                <p>© 2026 Developer Profile Explorer</p>
            </footer>
        </div>
    );
}

async function githubProfileLoader() {
const res = await fetch("https://api.github.com/users/Tanha2005");
if (!res.ok) throw new Error("Failed to fetch GitHub profile");
return res.json();
}


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {index:true,element:<Home/>},
            {path:"about",element:<About/>},
            {path:"products",element:<Products/>},
            {path:"profile",element:<Profile/>,
            loader:githubProfileLoader},
        ]
    },
])

const Myapp = () => {
    return <RouterProvider router={router}/>
}

export default Myapp
