import React from 'react';
import Bag from "./images/bag.jpg"
import Cloth from "./images/cloth.jpg"
import jacket from "./images/jacket.jpg" 
import top from "./images/top.jpg"
import "./men.css"

export default function Men() {
    return(
        <div className="primary" data-aos="zoom-in">
            <div className="bag">
                <img id='bag' src={Bag} alt="" />
                <h1>Fjallraven -...</h1>
                <p>$ 109.95</p>
                <button>Buy Now</button>
            </div>
            <div className="cloth">
                <img id='cloth' src={Cloth} alt="" />
                <h1>Men Casual ...</h1>
                <p>$ 23.3</p>
                <button>Buy Now</button>

            </div>
            <div className="jacket">
                <img id='jacket' src={jacket} alt="" />
                <h1>Mens Cotton ...</h1>
                <p>$ 55.99</p>
                <button>Buy Now</button>

            </div>
            <div className="top">
                <img id='top' src={top} alt="" />
                <h1>Mens Casual ...</h1>
                <p>$ 15.99</p>
                <button>Buy Now</button>

            </div>




        </div>
        
   
    )
}