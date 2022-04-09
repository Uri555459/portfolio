import './SocialLink.scss'

const SocialLink = ({href, target, imgPath, imgAlt}) => {
  return (
    <a href={href} target={target} rel="noreferrer"><img src={imgPath} alt={imgAlt}/></a>
  )
}

export default SocialLink