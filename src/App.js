import React, { useState } from 'react'

import Header from './components/Header/Header'
import TechnologyItem from './components/TechnologyItem/TechnologyItem'
import Filter from './components/Filter/Filter'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'

import data from './DB.json'

function App() {
  const { cards, technologyItems } = data
  const [workItems, setWorkItems] = useState(cards)

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

      <Header />

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
            {technologyItems.length && technologyItems.map(item => <TechnologyItem key={item.id} {...item} />)}
          </div>
        </div>
      </section>

      <section className="works">
        <div className="container">
          <h3 className="section__title">Мои работы</h3>
          <Filter buttonHandler={buttonHandler} />
          <div className="works__inner">
            {workItems.length && workItems.map(item => <Cart key={item.id} {...item} />)}
          </div>
        </div>
      </section>

      <Footer />

    </div >
  )
}

export default App;
