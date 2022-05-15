import React from 'react';
import { Link } from 'react-router-dom';
import img4 from '../images/img4.jpg';

function Card4(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'  to='/services'>
          <figure className='cards__item__pic-wrap' data-category='Adventure'>
              <img className='cards__item__img' src={img4} alt='ss' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
            Experience Football on Top of the Himilayan Mountains</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card4;
