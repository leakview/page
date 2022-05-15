import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../images/img3.jpg';

function Card3(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'  to='/services'>
          <figure className='cards__item__pic-wrap' data-category='Mystery'>
              <img className='cards__item__img' src={img3} alt='ss' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
            Set Sail in the Atlantic Ocean visiting Uncharted Waters</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card3;
