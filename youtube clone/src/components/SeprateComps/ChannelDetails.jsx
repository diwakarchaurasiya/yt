import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import {Video,ChannelCard} from '../indexExpo'
import { fetchDataApi } from '../utils/fetchDataApi'
// import { channelDetailsResponse,channelVdoResponse } from '../utils/fetchDataApi'
import { demoChannelTitle } from '../utils/constant'
const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDet, setChanelDets] = useState([]);
  const [channelVideos, setChanelVideos] = useState([]);
  useEffect(() => {
    fetchDataApi(`channels?part="snippet&id=${id}`)
      .then((data) => {
      setChanelDets(data?.items[0])
      })
      fetchDataApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setChanelVideos(data.items)
    })

    // setChanelDets(channelDetailsResponse);
    // setChanelVideos(channelVdoResponse);
  }, [id])
  // console.log(channelVdoResponse)
  return (
    <>
      <Box minHeight='95vh' width='100vw'>
        <Box >
          <Typography
            sx={{fontSize:{xs:'3rem',md:'6rem'}}}
            style={{ background: ' linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(9,121,81,1) 54%, rgba(0,226,255,1) 100%)', zIndex: 10, height: "300px" ,textAlign:'center',color:'transparent', fontWeight:'bold',WebkitTextStroke:'2px white',paddingTop:'2rem'}}>
            {channelDet?.snippet?.title.slice(0,30)||demoChannelTitle}
          </Typography>
          <ChannelCard channelInfo={channelDet} marginTop='-120px' />
        </Box>
          <Video videos={channelVideos} />
      </Box> 
    </>
    
  )
  setChanelDets('')
}

export default ChannelDetails