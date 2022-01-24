import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__text">Нужен веб-разработчик? <span>Готов к работе!</span>
          </div>
          <Link className='button wave-btn' to='about' smooth={true} duration={1000}>
            <span className='wave-btn__text'>Обо мне</span>
            <span className='wave-btn__waves'></span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;