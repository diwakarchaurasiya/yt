import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Link ,useNavigate} from 'react-router-dom';
const SearchBar = () => {
  let [query, setQuery] = useState('');
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`search/${query}`)
      setQuery('')
    }
  }
   return (
     <>
       <Paper component='form' onSubmit={handleSubmit} sx={{
         borderRadius: 20, boxShadow: 'none',border:'1px solid #0e0e0e',pl:5, mr:{sm:5}
       }} >
         <input
           autoSave="true"
           autoFocus={true}
           className='search-bar'
           value={query}
           placeholder='Search...'
           onChange={(data) => {setQuery(data.target.value)}}
           />
         <Link to={`channel/${query}`}>
         <IconButton>
           <Search type='submit' onSubmit={()=>{}} sx={{color:'red'}}/>
         </IconButton>
         </Link>
       </Paper>    
    </>
  )
}

export default SearchBar