import React from 'react';
import Bag from "./images/bag.jpg"
import Cloth from "./images/cloth.jpg"
import jacket from "./images/jacket.jpg" 
import top from "./images/top.jpg"
import Purple from "./images/purple.jpeg";
import Black from "./images/black.jpeg";
import Blue from "./images/blue.jpeg";
import White from "./images/white.jpeg";
import Red from "./images/red.jpeg";
import Wine from "./images/wine.jpeg";
import One from "./images/one.jpeg"
import Two from "./images/two.jpeg"
import Three from "./images/three.jpeg"
import Four from "./images/four.jpeg"
import Five from "./images/five.jpeg"
import Six from "./images/six.jpeg"
import First from "./images/first.jpeg";
import Second from "./images/second.jpeg";
import Third from "./images/third.jpeg";
import Fourth from "./images/fourth.jpeg";
import "./allsection.css"




export default function Allsection (){
    return(
    <div className="Allsection">
        <div className="primary">
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

            <div className="redB">
                <img id='redB' src={Red} alt="" />
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













        </div>






    )
}