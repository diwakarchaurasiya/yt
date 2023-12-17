import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import {Navbar,Feed,ChannelDetails,SearchFeed,VideoPlayer} from './components/indexExpo'
function App() {
return (
    <>
      <BrowserRouter>
        <Box sx={{ background: '#1e1e1e' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' exact element={<VideoPlayer/>}/>
          <Route path='/channel/:id' exact element={<ChannelDetails/>}/>
          <Route path='/search/:query' exact element={<SearchFeed/>}/>
        </Routes>
        </Box>
        </BrowserRouter>
    </>
  )
}

export default App
