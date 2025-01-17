import React from 'react';
import './hero.css';
import { slideData } from '../../Data/SlideData';
import Carousel from '../Carousel/Carousel';

const Hero = () => {
 
  return (
    <div id='home' className='hero'>
      <Carousel data={slideData} />
      <div className="hero-title">
          <p className="address">Toronto, <span>Canada</span></p>
          <h1>Hurry! Get the best villa for you</h1>
      </div>
    </div>
  );
}
export default Hero
