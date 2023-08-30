import React from 'react';
import One from "./images/one.jpeg"
import Two from "./images/two.jpeg"
import Three from "./images/three.jpeg"
import Four from "./images/four.jpeg"
import Five from "./images/five.jpeg"
import Six from "./images/six.jpeg"
import "./electronics.css"


export default function Electronics (){
    return(
        <div className="allelectronics">
        <div className="FirstA">
            <div className="one">
            <img id='one' src={One} alt="" />
            <h1>WD 2TB Eleme...</h1>
            <p>$ 64</p>
            <button>Buy Now</button>
            </div>

            <div className="two">
            <img id='two' src={Two} alt="" />
            <h1>SanDisk SSD...</h1>
            <p>$ 109</p>
            <button>Buy Now</button>
            </div>

            <div className="three">
            <img id='three' src={Three} alt="" />
            <h1>Silicon Powe...</h1>
            <p>$ 109</p>
            <button>Buy Now</button>
            </div>

            <div className="four">
            <img id='four' src={Four} alt="" />
            <h1>WD 4TB Gamin...</h1>
            <p>$ 9.85</p>
            <button>Buy Now</button>
            </div>
            
        </div>
        <div className="FirstB">
            <div className="five">
            <img id='five' src={Five} alt="" />
            <h1>Acer SB220Q ...</h1>
            <p>$ 599</p>
            <button>Buy Now</button>
            </div>

            <div className="six">
            <img id='six' src={Six} alt="" />
            <h1>Samsung 49-l...</h1>
            <p>$ 999.99</p>
            <button>Buy Now</button>
            </div>
        </div>
    
    </div>




    )
}