import React from 'react';
import './hero.css';
import './slider';

const Hero = () => {

  return (
    <>
        <div id='home' class='hero hero1'>
            <div class='change-back left'>
                &lt;
            </div>
            <div class="text">
                <div class="address">Toronto, <span>Canada</span></div>
                <h1>Hurry! Get the best villa for you</h1>
            </div>
            <div class='change-back right'>
                &gt;
            </div>
        </div>
        <ul class="bullets">
            <li class="active"></li>
            <li></li>
            <li></li>
        </ul>
            </>
  )
}
export default Hero
