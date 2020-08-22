import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Product from './Product';
import ProductDetails from './ProductDetails'; 
import ProductHome from './ProductHome';
import { useNavigate} from 'react-router';
import {Routes,Route,Link} from 'react-router-dom';

function NotFound(){
  return <div>Path Not Found</div>
}

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="about">About</Link> {' '}
        <Link to="products">Product</Link> {' '}
        <Link to = "/products/mobile">Mobile</Link> {' '}
        <Link to="/products/laptop">Laptop</Link>
        <button onClick = {()=>{
            navigate('/about');
        }}>
          Display About Page
        </button>
      </div>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "about" element = {<About/>}></Route>
        <Route path = "products" element = {<Product/>}>
          <Route path = ":productId" element = {<ProductDetails/>} ></Route>
          <Route path = "/" element = {<ProductHome/>} ></Route>
        </Route>
        <Route path = "*" element = {<NotFound/>} ></Route>
      </Routes>
      </div>
  );
}

export default App;
