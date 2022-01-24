import React from 'react';
import Button from '../Button/Button';

const Cart = ({ images = '', link = '', buttonText = '' }) => {
  return (
    <div className="works__item">
      <img src={images} className="works__item_img" alt="" />
      <Button text={buttonText} link={link} target="_blank" />
    </div>
  );
}

export default Cart;