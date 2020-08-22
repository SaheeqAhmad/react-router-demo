import React from 'react';
import { Outlet } from 'react-router';
//import { Link } from 'react-router-dom';

function Product() {
    
  return (
    <div>
      <h1>Product</h1>
       <hr/>
        <div>
          <Outlet/>
        </div>

    </div>
  );
}

export default Product;
