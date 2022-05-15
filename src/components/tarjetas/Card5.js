import React from 'react';
import { Link } from 'react-router-dom';
import img8 from '../images/img8.jpg';

function Card5(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'   to='/services'>
          <figure className='cards__item__pic-wrap' data-category='Adrenaline'>

              <img className='cards__item__img' src={img8} alt='ss' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
            Ride through the Sahara Desert on a guided camel tour</h5>

          </div>
        </Link>
      </li>
    </>
  );
}

export default Card5;
