import React from 'react';
import Purple from "./images/purple.jpeg";
import Black from "./images/black.jpeg";
import Blue from "./images/blue.jpeg";
import White from "./images/white.jpeg";
import Red from "./images/red.jpeg";
import Wine from "./images/wine.jpeg";
import "./women.css"


export default function Women (){
    return(
        <div className="allwomen">
            <div className="secA">
                <div className="purple">
                <img id='purple' src={Purple} alt="" />
                <h1>BIYLACLESEN...</h1>
                <p>$ 5.99</p>
                <button>Buy Now</button>
                </div>

                <div className="black">
                <img id='black' src={Black} alt="" />
                <h1>Lock and Lov...</h1>
                <p>$ 29.95</p>
                <button>Buy Now</button>
                </div>

                <div className="blue">
                <img id='blue' src={Blue} alt="" />
                <h1>Rain Jacket...</h1>
                <p>$ 39.99</p>
                <button>Buy Now</button>
                </div>

                <div className="white">
                <img id='white' src={White} alt="" />
                <h1>MBJ Women's...</h1>
                <p>$ 9.85</p>
                <button>Buy Now</button>
                </div>
                
            </div>
            <div className="secB">
                <div className="red">
                <img id='red' src={Red} alt="" />
                <h1>Opna Women's ...</h1>
                <p>$ 7.95</p>
                <button>Buy Now</button>
                </div>

                <div className="wine">
                <img id='wine' src={Wine} alt="" />
                <h1>DANVOUY Wome...</h1>
                <p>$ 12.99</p>
                <button>Buy Now</button>
                </div>
            </div>
        
        </div>


    )
}