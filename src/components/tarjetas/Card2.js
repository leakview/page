import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../images/img2.jpg';

function Card2(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'   to='/services'>
          <figure className='cards__item__pic-wrap' data-category='Luxury'>           
              <img className='cards__item__img' src={img2} alt='ss' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
            Travel through the Islands of Bali in a Private Cruise</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card2;
