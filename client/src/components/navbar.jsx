import React from 'react';
import { Route, Routes  } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./navcss.css"
import Men from "./men";
import Women from "./women"
import Electronics from "./electronics";
import Jewelries from './jewelries';
import Allsection from './allsection';


 
 function Navbar(){

    return(
        <><div className="check">

             <div className="heading">
              <h1>Latest Products</h1>
             </div>
             <div className="middle">
                <Link to="/allsection" className='all-link' id='link'>All</Link>
                <Link to="/men" className='all-link' >Men's Products</Link>
                <Link to="./women" className='all-link' >Women's Products</Link>
                <Link to="./electronics" className='all-link' >Electronics</Link>
                <Link to="./jewelries " className='all-link' >Jewelries</Link>
             </div>

 
           
        </div><Routes>
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/jewelries" element={<Jewelries />} />
                <Route path="/allsection" element={<Allsection />} />

            </Routes></>
         
 )
       
}

export default Navbar;


