import React, { useEffect, useState } from 'react'
import axioshttp from "../axioshttp.js"
import SearchSuggestion from './SearchSuggestion.jsx'
const SearchBar = () => {
    const[users, setUsers] = useState()
    const[query, setQuery] = useState("")
    const[isloading, setIsloading] = useState(false)
    const handleChange = async e => {
        setIsloading(true)
        setQuery(e.target.value)
        if(e.target.value.length > 0){
          const res = await axioshttp.get(`query/${e.target.value.toLowerCase()}`)
            setUsers(res.data) 
            setIsloading(false) 
        }
    }

  return (
    <>
        <div className='flex justify-center'>
            <div className='mt-4 flex gap-2'>
                <label htmlFor="" className='font-semibold text-blue-700 text-xl'>Name:</label>
                <input type="search" onChange={handleChange} name="" id="" placeholder='Type to search...' className='border border-slate-300 px-2 py-1 w-80 outline-none focus:ring-2 rounded shadow'/>
            </div>
        </div>
        <SearchSuggestion users={users} loading={isloading} query={query}/>
    </>
  )
}

export default SearchBar
