import React from 'react';
import First from "./images/first.jpeg";
import Second from "./images/second.jpeg";
import Third from "./images/third.jpeg";
import Fourth from "./images/fourth.jpeg";
import './jewelries.css';

export default function Jewelries(){
    return(
        <div className="secondary">
            <div className="first">
                <img id='first' src={First} alt="" />
                <h1>John Hardy W...</h1>
                <p>$ 695</p>
                <button>Buy Now</button>
            </div>
            <div className="second">
                <img id='second' src={Second} alt="" />
                <h1>Solid Gold P...</h1>
                <p>$ 168</p>
                <button>Buy Now</button>

            </div>
            <div className="third">
                <img id='third' src={Third} alt="" />
                <h1>White Gold P...</h1>
                <p>$ 9.99</p>
                <button>Buy Now</button>

            </div>
            <div className="fourth">
                <img id='fourth' src={Fourth} alt="" />
                <h1>Pierced Owl ...</h1>
                <p>$ 10.99</p>
                <button>Buy Now</button>

            </div>


        </div>
    )

     }