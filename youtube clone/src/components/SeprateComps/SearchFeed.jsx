import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { fetchDataApi } from '../utils/fetchDataApi'
import Video from './feed/Video'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  let {query} = useParams()
  const [videos,setVideos] = useState([])
  useEffect(() => {
    fetchDataApi(`search?part=snippet&q=${query}`)
      .then((data) => {
        setVideos(data.items)
    })
    // setVideos(sampleResponse)
  }, [query])
  // console.log(videos)
  return (
    <>
        
        <Box sx={{overflowY:"auto",height:"100vh",flex:2}}>
          <Typography variant='h4' fontWeight='bold' color='#fff' margin='10px'>
            Search results for: <span style={{color:"red"}}>{query}</span> videos
          </Typography>
          <Video videos={videos} />
        </Box>
        
    </>
    
  )
}

export default SearchFeed