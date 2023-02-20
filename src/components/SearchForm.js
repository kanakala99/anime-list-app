import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {


  const searchbar = React.useRef('')

  React.useEffect(() => {

    searchbar.current.focus();
  }, [])
  const { setSearchTerm } = useGlobalContext();
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className="form-control">
          <label htmlFor="name">Search for an anime</label>
          <input type="text" ref={searchbar} id='name' onChange={((e) => {
            setSearchTerm(e.target.value);
          })} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
