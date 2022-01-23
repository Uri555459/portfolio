import React, { useState } from 'react'
import { Link } from 'react-scroll'

import Cart from './components/Cart/Cart'
import Filter from './components/Filter/Filter'

import data from './DB.json'

function App() {
  const [workItems, setWorkItems] = useState(data.cards)

  const buttonHandler = event => {
    if (event.target.parentElement.classList.contains('button')) {
      event.preventDefault()
    }
    const category = event.target.parentElement.dataset.category
    const workItems = data.cards.filter(item => {
      if (category === 'all') {
        return item
      } else if (item.category === category) {
        return item
      }
      return null
    })
    return setWorkItems(workItems)
  }




  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="my-photo  ">
            </div>
            <h1 className="header__title">
              Привет, меня зовут Юрий, и я создаю классные сайты
            </h1>
            <Link className='header__wave-btn button wave-btn' to='about' smooth={true} duration={1000}>
              <span className='wave-btn__text'>Обо мне</span>
              <span className='wave-btn__waves'></span>
            </Link>
            <img src="images/down-arrow.svg" alt="Arrow down" className="header-arrow" />
          </div>
        </div>
      </header >

      <section className="about" id="about">
        <div className="container">
          <h3 className="section__title">Обо мне</h3>
          <p className="section__subtitle">
            Целеустремленный, ответственный и исполнительный. Имея аналитический склад ума и логическое мышление - в
            процессе верстки продумываю каждую деталь.
            Верстка сайтов, интернет-магазинов и Landing Page (фиксированная, резиновая, адаптивная). Работаю
            удаленно.
            В работе использую SCSS, БЕМ, Gulp, Jquery, Javascript, Git, CMS Wordpress, React.
          </p>
        </div>
      </section>

      <section className="expert">
        <div className="container">
          <h3 className="section__title">Технологии</h3>
          <div className="expert__cards">
            <div className="expert__item">
              <div className="expert__item_img">
                <img src="images/expert/html.png" alt="" />
              </div>
              <h4 className="expert__cards_title">html5</h4>
            </div>
            <div className="expert__item">
              <div className="expert__item_img">
                <img src="images/expert/css.png" alt="" />
              </div>
              <h4 className="expert__cards_title">css3</h4>
            </div>
            <div className="expert__item">
              <div className="expert__item_img">
                <img src="images/expert/javascript.png" alt="" />
              </div>
              <h4 className="expert__cards_title">javascript</h4>
            </div>
            <div className="expert__item">
              <div className="expert__item_img">
                <img src="images/expert/react.svg" alt="" />
              </div>
              <h4 className="expert__cards_title">react</h4>
            </div>
            <div className="expert__item">
              <div className="expert__item_img">
                <img src="images/expert/nodejs.svg" alt="" />
              </div>
              <h4 className="expert__cards_title">nodejs</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="container">
          <h3 className="section__title">Мои работы</h3>
          <Filter buttonHandler={buttonHandler} />
          <div className="works__inner">
            {workItems.length && workItems.map((item, index) => <Cart key={index} {...item} />)}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__text  fadeInLeft">Нужен веб-разработчик? <span>Готов к работе!</span>
            </div>
            <Link className='button wave-btn' to='about' smooth={true} duration={1000}>
              <span className='wave-btn__text'>Обо мне</span>
              <span className='wave-btn__waves'></span>
            </Link>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default App;
