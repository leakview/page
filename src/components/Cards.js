import React from 'react';
import './Cards.css';
// import CardItem from './CardItem';
import Card1 from './tarjetas/Card1';
import Card2 from './tarjetas/Card2';
import Card3 from './tarjetas/Card3';
import Card4 from './tarjetas/Card4';
import Card5 from './tarjetas/Card5';

function Cards() {
  return (

    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           <Card1 />
           <Card2 />
          </ul>

          <ul className='cards__items'>
           <Card3 />
           <Card4 />
           <Card5 />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
