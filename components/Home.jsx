import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'


export default function Home() {
    const [query,setQuery] = useState('');
    const [region,setRegion] = useState('all');
  return (
     <main>
        <div className="search-filter-container">
            <SearchBar setQuery={setQuery} />
            <SelectMenu setRegion={setRegion}/>
        </div>
        <CountriesList region={region}  query={query} />
    </main>
  )
}
