import React from 'react'
import { Stack ,Paper} from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constant'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems='center' p={2}  sx={{
        position: 'fixed', background: "#0e0e0e", top: 0, justifyContent: 'space-between',width:'100%' ,boxShadow: '0px -80px 100px white', zIndex:10
      }}>
        <Link to="/" style={{
          display: "flex", alignItems: 'center', justifyContent:'center'}}>
          <img src={logo} alt='hii' width={180}/>
        </Link>
        <SearchBar/>
      </Stack>
    </>
  )
}

export default Navbar