import React from 'react'
import { Link } from 'react-router-dom'

const Anime = ({ mal_id, title, images: { jpg: { image_url: img } }, rank }) => {
  return (
    <article className='anime'>
      <div className='img-container'><img src={img} alt={title} /></div>
      <div className="anime-footer">
        <h3>{title}</h3>
        <p>Rank:{rank}</p>
        <Link to={`/anime/${mal_id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}

export default Anime
