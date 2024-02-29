
import React from 'react' 
 import frame6 from "../img/Frame 36.png" 
 import frame7 from "../img/Frame 47881.png" 
import frame8 from "../img/Frame 47881 (1).png"
import frame9 from "../img/Frame 47881 (2).png"
import frame10 from "../img/Frame 47881 (3).png"
import logo from '../img/squaremart-logo.png'
import Crypto3 from '../img/Crypto-3.png'
import Crypto9 from "../img/Crypto-9.png"
import fastclock from '../img/clock.png'
import svg16 from '../img/svg16.png'
 import svg17 from '../img/svg17.png'
import MovingText from 'react-moving-text'

const Squareweb=()=>
{
    return (
        <div className="container-web">
         <section className="squaremart">
    <section className="header">
        <div className="squaremart-logo">
            <img src={logo} alt="Squaremart Web Logo"/></div>
        <div className="other-page">
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="service.html">Contact</a></li>
                <li><a href="shop.html">Market Place</a></li>
                <li><a href="about.html">FAQ</a></li>
               
            </ul>
        </div>
        <div className="signing-page">
            <div className="sign-in">
                <a className="login" href="sign-in.html">Log In</a>
                <a className="sign-up" href="sign-up.html">Sign Up</a>
            </div>
        </div>
    </section>
    <section className="main-page">
        <div className="bitcoin-icon">
         <MovingText
   type="shakeVertical"
   duration='11950ms'
  delay='5s'
   timing='ease'
   iteration='infinite'
   fillMode='none'>
          
   <img src={Crypto3} alt=""/>
 </MovingText>
           
        </div>
        <div className="page-content">
            <h2>Unlock Joyful <br/> Surprises with <br/> <span>Squaremart</span></h2>
            <p>Turn those forgotten gift cards into something you truly desire. Our <br/> seamless exchange platform makes it quick and hassle-free.</p>
        </div>
        <div className="e-icon">
           <MovingText
   type="shakeVertical"
   duration='10950ms'
  delay='3s'
   timing='ease'
   iteration='infinite'
   fillMode='none'>
            <img src={Crypto9} alt=""/>
             </MovingText>
        </div>
    </section>
</section>
            <section className="our-goals">
                <div className="fast-reliable">
                    <div className="fast-logo">
                        <img src={fastclock} alt=""/> 
                    </div>
                    <div className="goals-title">
                        <h3>Fast and Reliable</h3>
                    </div>
                    <div className="short-description">
                        <p>Lorem ipsum dolor sit amet consectetur. Justo egestas at purus venenatis eget enim. Quisque justo libero risus arcu sollicitudin sit non aliquet.</p>
                    </div>
                </div>
                <div className="online-wallet">
                    <div className="wallet-logo">
                        <img src={svg16} alt=""/>
                    </div>
                    <div className="wallet-title">
                        <h3>Online Wallet</h3>
                    </div>
                    <div className="wallet-desc">
                        <p>Lorem ipsum dolor sit amet consectetur. Justo egestas at purus venenatis eget enim. Quisque justo libero risus arcu sollicitudin sit non aliquet.</p>
                    </div>
                </div>
                <div className="gift-cards">
                    <div className="card-logo">
                        <img src={svg17} alt=""/>
                    </div>
                    <div className="card-title">
                        <h3>Discounted Gift Cards</h3>
                    </div>
                    <div className="card-desc">
                        Lorem ipsum dolor sit amet consectetur. Justo egestas at purus venenatis eget enim. Quisque justo libero risus arcu sollicitudin sit non aliquet.
                    </div>
                </div>
            </section>
            <br/>
            <section className="our-services">
                <h1>Our Services</h1>
                <br/>
                <div className="product-category">
                     <div id="services">
                        <div className="shipping-illustration">
                            <img src={frame7} alt=""/>
                        </div>
                        <div className="title">
                            <h2>Shipping</h2>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur. Leo aliquam egestas condimentum dignissim ornare posuere. Egestas ac ut curabitur eget sed tortor. Lectus neque laoreet ante nisi. Congue sit etiam 
                        </div>
                        <div className="get-started">
                            <a href="shipping.html">Get Started</a>
                        </div>
                    </div>
                   <div id="services">
                        <div className="shipping-illustration">
                 <img src={frame8} alt=""/>
                        </div>
                        <div className="title">
                            <h2>Wallet</h2>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur. Leo aliquam egestas condimentum dignissim ornare posuere. Egestas ac ut curabitur eget sed tortor. Lectus neque laoreet ante nisi. Congue sit etiam 
                        </div>
                        <div className="get-started">
                            <a href="shipping.html">Get Started</a>
                        </div>
                    </div>
                  <div id="services">
                        <div className="shipping-illustration">
                            <img src={frame9} alt=""/>
                        </div>
                        <div className="title">
                            <h2>Gift Card</h2>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur. Leo aliquam egestas condimentum dignissim ornare posuere. Egestas ac ut curabitur eget sed tortor. Lectus neque laoreet ante nisi. Congue sit etiam 
                        </div>
                        <div className="get-started">
                            <a href="shipping.html">Get Started</a>
                        </div>
                    </div>
                  <div id="services">
                        <div className="shipping-illustration">
                            <img src={frame10} alt=""/>
                        </div>
                        <div className="title">
                            <h2>Shop</h2>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur. Leo aliquam egestas condimentum dignissim ornare posuere. Egestas ac ut curabitur eget sed tortor. Lectus neque laoreet ante nisi. Congue sit etiam 
                        </div>
                        <div className="get-started">
                            <a href="shipping.html">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <section className="market-place">
                <h1>Market Place</h1> <br/>
                <div className="all-product">
                    <div className="market-product">
                        <img src={frame6} alt=""/>
                        <div className="product-details">
                            <span>Electronics</span>
                            <h3>Airpod Pro</h3>
                            <p>Wireless Noise Cancelling Earphones</p>
                            <h4 className="product-price">$250</h4>
                        </div>
                    </div>
                    <div className="market-product">
                        <img src={frame6} alt=""/>
                        <div className="product-details">
                            <span>Electronics</span>
                            <h3>Airpod Pro</h3>
                            <p>Wireless Noise Cancelling Earphones</p>
                            <b>$250</b>
                        </div>
                    </div>
                    <div className="market-product">
                        <img src={frame6} alt=""/>
                        <div className="product-details">
                            <span>Electronics</span>
                            <h3>Airpod Pro</h3>
                            <p>Wireless Noise Cancelling Earphones</p>
                            <b>$250</b>
                        </div>
                    </div>
                    <div className="market-product">
                        <img src={frame6} alt=""/>
                        <div className="product-details">
                            <span>Electronics</span>
                            <h3>Airpod Pro</h3>
                            <p>Wireless Noise Cancelling Earphones</p>
                            <b>$250</b>
                        </div>
                    </div>
                    <div className="market-product">
                        <img src={frame6} alt=""/>
                        <div className="product-details">
                            <span>Electronics</span>
                            <h3>Airpod Pro</h3>
                            <p>Wireless Noise Cancelling Earphones</p>
                            <b>$250</b>
                        </div>
                    </div>
                </div>
            </section>
          <section class="trusted-customers">
    <div class="customer-testify">
        <h2>Trusted by over 2000+ customers</h2>
        <p>Score based on thousands of reviews </p>
    </div>
    <div class="memo">
        <div class="customer-memo">
            <div class="customer-comment">
                <p>Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim mattis duis tortor aenean quam quam. Et ut magnis risus suspendisse nec et. Justo enim vulputate tellus pharetra. Hac placerat tincidunt amet id congue. Malesuada aenean sit sed quis fermentum at massa egestas sit. Non nulla velit vel massa nisi.</p>
            </div>
            <div class="customer-details">
                <img src={frame6} alt=""/>
                <h4>Customer Memo</h4>
            </div>
        </div>
        <div class="customer-memo">
            <div class="customer-comment">
                <p>Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim mattis duis tortor aenean quam quam. Et ut magnis risus suspendisse nec et. Justo enim vulputate tellus pharetra. Hac placerat tincidunt amet id congue. Malesuada aenean sit sed quis fermentum at massa egestas sit. Non nulla velit vel massa nisi.</p>
            </div>
            <div class="customer-details">
                <img src={frame6} alt=""/>
                <h4>Customer Memo</h4>
            </div>
        </div>
        <div class="customer-memo">
            <div class="customer-comment">
                <p>Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim mattis duis tortor aenean quam quam. Et ut magnis risus suspendisse nec et. Justo enim vulputate tellus pharetra. Hac placerat tincidunt amet id congue. Malesuada aenean sit sed quis fermentum at massa egestas sit. Non nulla velit vel massa nisi.</p>
            </div>
            <div class="customer-details">
                <img src={frame6} alt=""/>
                <h4>Customer Memo</h4>
            </div>
        </div>
    </div>
</section>
         <section className="footer">
    <footer className="footer">
        <div className="features">
            <h2>Features</h2>
            <ul>
                <li><a href="market-place.html">Marketplace</a></li>
                <li><a href="gift-wrap.html">Gift card swap</a></li>
                <li><a href="wallet-wrap.html">Wallet swap</a></li>
            </ul>
        </div>
        <div className="company">
            <h2>Company</h2>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="terms-and-condition.html">Terms and Condition</a></li>
                <li><a href="privacy-policy.html">Privacy policy</a></li>
            </ul>
        </div>
        <div className="resources">
            <h2>Resources</h2>
            <ul>
                <li><a href="blog.html">Blogs</a></li>
                <li><a href="guide.html">Guide</a></li>
                <li><a href="career.html">Careers</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
        </div>
        <div className="support">
            <h2>Support</h2>
            <ul>
                <li><a href="help-center.html">Help Center</a></li>
                <li><a href="help-center.html">Help Center</a></li>
                <li><a href="help-center.html">Help Center</a></li>
            </ul>
        </div>
    </footer>
    <div className="follow-up">
{/*         <div className="social-media">
            <a href=""><img src="img/Shape.png" alt="LinkedIn Social Media Page"></a>
            <a href=""><img src="img/ic Facebook.png" alt="Facebook Social Media Page"></a>
            <a href=""><img src="img/ic Twitter.png" alt="Twitter Social Media Page"></a>
            <a href=""><img src="img/instagram-svgrepo-com (2).png" alt="Instagram Social Media Page"></a>
            <a href=""><img src="img/Clubhouse_App_Logo.png" alt="Instagram Social Media Page"></a>
            <a href=""><img src="img/Vector (1).png" alt="Instagram Social Media Page"></a>
        </div> */}
        <div className="copyright">
            <span>SquaremartCopyright © 2023 Squaremart Inc. All rights reserved.</span>
        </div>
    </div>
</section>
        </div>
    )
}
export default Squareweb
