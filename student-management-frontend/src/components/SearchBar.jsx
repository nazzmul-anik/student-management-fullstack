import React from 'react'

const SearchBar = ({search, setSearch}) => {
  return (
    <div className='col-sm-6 mb-4'>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type='search' role='searchbox' 
            placeholder='Search Student' value={search}
            className='form-control'
            onChange={(e)=>setSearch(e.target.value)}></input>
        </form>
    </div>
  )
}

export default SearchBar