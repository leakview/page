import React from 'react';
import { Link } from 'react-router-dom';
import img9 from '../images/img9.jpg';

function Card1(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to='/services'>
          <figure className='cards__item__pic-wrap' data-category='Adventure'>
              <img className='cards__item__img' src={img9} alt='ss' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
            Explore the hidden waterfall kkkkkkkkkkk</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card1;
