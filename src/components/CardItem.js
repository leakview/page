import React from 'react';
import { Link } from 'react-router-dom';
import img9 from './images/img9.jpg';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' 
        // to={props.path}
        to='/services'
        >
          <figure className='cards__item__pic-wrap'
          //  data-category={props.label}
          data-category='Adventure'
           >
            {/* <image
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            /> */}
              <img className='cards__item__img' src={img9} alt='ss' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
            Explore the hidden waterfall deep inside the Amazon Jungle</h5>
            {/* {props.text} */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
