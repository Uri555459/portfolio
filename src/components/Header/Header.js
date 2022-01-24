import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="my-photo">
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
  )
}

export default Header