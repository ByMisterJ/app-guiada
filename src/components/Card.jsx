import { Link } from 'react-router-dom'
import './Card.css'

function Card({title = "titulo por defecto", description = "descripcion por defecto"}) {
  return (
    <div className='Card'>
        <Link to={title}><h2>{title}</h2></Link>
        <p>{description}</p>
    </div>
  )
}

export default Card