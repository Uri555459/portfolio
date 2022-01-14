import React from 'react';

// import data from '../../DB.json'

import './button.scss'

const Button = ({ text, classes, link, target = '', dataAttr = '', buttonHandler = f => f }) => {

  // const buttonHandler = event => {
  //   if (event.target.parentElement.classList.contains('button')) {
  //     event.preventDefault()
  //     // const category = event.target.parentElement.dataset.category

  //     // const filterCardsArr = data.cards.filter(item => {
  //     //   if (item.category === category) return item
  //     // })
  //   }
  // }

  return (
    <a href={link} className={`${classes} wave-btn`} target={target} onClick={(event) => buttonHandler(event)} data-category={dataAttr}>
      <span className="wave-btn__text">{text}</span>
      <span className="wave-btn__waves"></span>
    </a>
  );
}

export default Button;