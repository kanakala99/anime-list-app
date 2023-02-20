import React, { useState, useContext, useEffect } from 'react'


const url = 'https://api.jikan.moe/v4/anime'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [animeList, setAnimeLIst] = useState([])


  const fetchData = async () => {

    try {
      setLoading(true)
      const response = await fetch(url);
      const result = await response.json();
      const { data, pagination } = result;
      console.log(pagination.length)
      setAnimeLIst(data)
      setLoading(false)

    } catch (error) {
      console.log(error)

    }


  }

  useEffect(() => {

    fetchData();
  }, [])
  return <AppContext.Provider value={{ loading, setLoading, setSearchTerm, animeList, searchTerm }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
