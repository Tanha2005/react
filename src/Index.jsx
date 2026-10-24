import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componet/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Laptop from './pages/Laptop';
import Phone from './pages/Phone';
import Camera from './pages/Camera'; 


const Index = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path='about' element={<About />} />

                        <Route path='product' element={<Product />} >
                        <Route path="phone" element={<Phone/>} />
                        <Route path="laptop" element={<Laptop />} />
                        <Route path="camera" element={<Camera />} />
                    </Route>
                  </Route>

                </Routes>
            </Router>
        </>
    )
}

export default Index
