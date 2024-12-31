import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useOutletContext } from 'react-router-dom';


export default function Home() {
    const [query,setQuery] = useState('');
    const [region,setRegion] = useState('all');
    const [isDark] = useOutletContext()

  return (
      <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu  setRegion={setRegion} />
      </div>
      {query === 'unmount' ? '' : <CountriesList region={region} query={query} />}
    </main>
  )
}
