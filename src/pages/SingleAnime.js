import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'



const SingleAnime = () => {
  const { id } = useParams();
  const singleUrl = "https://api.jikan.moe/v4/anime/";
  const [loading, setLoading] = useState(false)
  const [anime, setAnime] = useState(null)

  useEffect(() => {
    setLoading(true);

    async function getAnime() {

      try {

        setLoading(true)
        const resp = await fetch(`${singleUrl}${id}`)
        const result = await resp.json();

        const { data } = result;
        setAnime(data)
        setLoading(false)
      } catch (error) {

        console.log(error)
        setLoading(false)
      }
    }
    getAnime();

  }, [id])

  if (loading) {

    return <Loading />
  }
  if (!anime) {
    return <h2 className='section-title'>no Anime to display</h2>
  }

  const { title, images: { jpg: { image_url: img } }, rank, synopsis, score, trailer: { url: youtube } } = anime
  return (
    <section className='section anime-section'>
      <Link to='/' className='btn btn-primary'>back home</Link>
      <h2 className='section-title'>{title}</h2>
      <div className="card">
        <img src={img} alt={title} />
        <div className="card-info">

          <p><span className='card-data'>name :</span>{title}</p>
          <p><span className='card-data'>score :</span>{score}</p>
          <p><span className='card-data'>Rank:</span>{rank}</p>
          <p><span className='card-data'>synopsis :</span>{synopsis}</p>
          <a href={youtube} target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Watch Trailer</a>

        </div>
      </div>
    </section>
  )
}

export default SingleAnime
