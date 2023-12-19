import React from 'react'
import { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player' 
import { Box, Typography, Stack } from '@mui/material'
import { fetchDataApi } from '../utils/fetchDataApi'

const VideoPlayer = () => {
  let [playAbleVideos,setPlayAbleVideos ]= useState([])
  const { id } = useParams();
  useEffect(() => {
    fetchDataApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setPlayAbleVideos(data.items[0])
      )
  }, [id])
  console.log(playAbleVideos)
  return (
    <Box minHeight='95vh'>
      <Stack flexDirection={{ xs: 'column',md:'row'}}>
        <Box flex={1}> 
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoPlayer