// Write your code here.
import './index.css'

const TechCard = props => {
  const {cardProps} = props
  const {title, description, imgUrl, className} = cardProps
  return (
    <li className={className}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="card-img" alt={title} src={imgUrl} />
    </li>
  )
}

export default TechCard
