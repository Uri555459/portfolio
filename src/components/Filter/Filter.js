import React from 'react'
import Button from '../Button/Button'

// import data from '../../DB.json'

import './filter.scss'

const Filter = ({ buttonHandler }) => {

  return (
    <div className='filter'>
      <Button buttonHandler={buttonHandler} classes='button filter__btn' text='Все работы' dataAttr='all' />
      <Button buttonHandler={buttonHandler} classes='button filter__btn' text='HTML CSS JS' dataAttr='html' />
      <Button buttonHandler={buttonHandler} classes='button filter__btn' text='Javascript' dataAttr='javascript' />
      <Button buttonHandler={buttonHandler} classes='button filter__btn' text='React' dataAttr='react' />
    </div>
  )
}

export default Filter