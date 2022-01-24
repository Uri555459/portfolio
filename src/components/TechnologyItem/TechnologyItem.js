const TechnologyItem = ({ title = '', images = '' }) => {
  return (
    <div className="expert__item">
      <div className="expert__item_img">
        <img src={images} alt="title" />
      </div>
      <h4 className="expert__cards_title">{title}</h4>
    </div>
  )
}

export default TechnologyItem 