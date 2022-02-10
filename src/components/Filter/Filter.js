import React, { useEffect } from 'react'
import Button from '../Button/Button'

import './filter.scss'

const Filter = ({ buttonHandler }) => {

  useEffect(() => {
    const buttons = document.querySelectorAll('.filter a')

    function buttonActive() {
      buttons.forEach(button => {
        button.classList.remove('active')
      })
      this.classList.add('active')
    }

    buttons.forEach(button => {
      button.addEventListener('click', buttonActive)
    })
  }, [])
  return (
    <div className='filter'>
      <Button buttonHandler={buttonHandler} classes='button filter__btn active' text='Все работы' dataAttr='all' />
      <Button buttonHandler={buttonHandler} classes='button filter__btn' text='HTML CSS JS' dataAttr='html' />
      <Button buttonHandler={buttonHandler} classes='button filter__btn' text='Javascript' dataAttr='javascript' />
      <Button buttonHandler={buttonHandler} classes='button filter__btn' text='React' dataAttr='react' />
    </div>
  )
}

export default Filter