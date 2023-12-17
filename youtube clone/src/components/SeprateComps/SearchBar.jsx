import React from 'react'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
   return (
     <>
       <Paper component='form' onSubmit={() => {}} sx={{
         borderRadius: 20, boxShadow: 'none',border:'1px solid #0e0e0e',pl:5, mr:{sm:5}
       }} >
         <input
           className='search-bar'
           value=""
           placeholder='Search...'
           onChange={() => { }}
           sx={{ fontSize:'20px'}}
           />
         <IconButton>
           <Search type='submit' onSubmit={()=>{}} sx={{color:'red'}}/>
         </IconButton>
       </Paper>    
    </>
  )
}

export default SearchBar