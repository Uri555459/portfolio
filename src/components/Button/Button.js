import React from 'react';

import './button.scss'

const Button = ({ text, classes, link, target = '' }) => {

  const buttonHandler = event => {
    if (event.target.parentElement.classList.contains('button')) {
      event.preventDefault()
    }
  }

  return (
    <a href={link} className={`${classes} wave-btn`} target={target} onClick={(event) => buttonHandler(event)}>
      <span className="wave-btn__text">{text}</span>
      <span className="wave-btn__waves"></span>
    </a>
  );
}

export default Button;