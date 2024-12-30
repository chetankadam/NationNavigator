import React, { useEffect, useState,useMemo } from 'react'
import countriesData from './../countriesData'
import CountryCard from './ConuntryCard'
import CountryListShimmer from './CountryListShimmer';


export default function CountriesList({query,region}) {
  console.log('{query,region}:', {query,region})
  // const [countriesData, setCountriesData] = useState([]);
  const [countries, setCountries] = useState([]);
  // const [ loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then(responce => responce.json())
  //   .then(data => setCountriesData(data))
  // },[])

  // useEffect(()=> {
  //   setLoading(true);
  //   const timeoutId = setTimeout(() => {
  //     setCountries(filteredCountries)
  //     setLoading(false)
  //   },1000)

  //   return () => clearTimeout(timeoutId)
  // },[]);

  
  const filteredCountries = useMemo(() => {
    return countriesData
    ?.filter((country) => 
      country?.name?.common?.toLowerCase().includes(query.toLowerCase()) &&
    (region === 'all' || country?.region === region)
  );
  },[region,query]) 

  // if(filteredCountries.length === 0) {
  //   console.log('!filteredCountries.length:', !filteredCountries.length)
  //   console.log('filteredCountries.length:', filteredCountries.length)
  //   return  <CountryListShimmer/>
  // }

  return (
    <>
     <div className="countries-container">
      {filteredCountries?.map((country) => {
        return (
          <CountryCard
            key={country?.name?.common}
            name={country?.name?.common.toLocaleLowerCase()}
            flag={country?.flags?.svg}
            population={country?.population}
            region={country?.region}
            capital={country?.capital?.[0]}
            data={country}
          />
        )
      })}
    </div>
    </>
  )
}
