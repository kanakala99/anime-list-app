import React from 'react'
import Anime from './Anime'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const AnimeList = () => {

  const { animeList, loading, searchTerm } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  const tranformAnime = () => {

    let filteredAnime = animeList;

    if (searchTerm) {
      filteredAnime = filteredAnime.filter((anime) => {
        return anime.title.toLowerCase().includes(searchTerm.toLowerCase())
      })
    }
    return filteredAnime;
  }
  return (
    <section className='section'>
      <h2 className='section-title'>{tranformAnime().length < 1 ? "No Anime matched your search" : "Anime"}</h2>
      <div className="animes-center">
        {tranformAnime().map((anime) => {
          return <Anime key={anime.mal_id} {...anime} />
        })}
      </div>
    </section>
  )
}

export default AnimeList
