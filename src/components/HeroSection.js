import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import img from './img.jpg';
import v1 from './videos/v1.mp4';
import img9 from './images/img9.jpg';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={v1} autoPlay loop muted/>
      {/* <img className='services' src={img9} alt='ss' /> */}
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </div>
        
    </div>
  );
}

export default HeroSection;
