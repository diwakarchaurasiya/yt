import React from 'react'
import { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player' 
import { Box, Typography, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { fetchDataApi } from '../utils/fetchDataApi'
import Video from './feed/Video'
const VideoPlayer = () => {
  let [playAbleVideos,setPlayAbleVideos ]= useState([])
  let [relatedVideos, setrelatedVideos] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetchDataApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setPlayAbleVideos(data.items[0])
      )
    fetchDataApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setrelatedVideos(data.items)
      )
  }, [id])
  if (!playAbleVideos?.snippet) return 'loading ...'
  let { snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount} } = playAbleVideos;
  return (
    <Box minHeight='95vh'>
      <Stack flexDirection={{ xs: 'column',md:'row'} }>
        <Box flex={1} paddingX={2}> 
          <Box sx={{ width: '100%', position: 'sticky', top: '90px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player'/>
            <Typography  variant='h5' sx={{color:'#fff',fontWeight:'bold',p:2}}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' color='#fff' py={2} px={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{md :'h6', sm : 'subtitle1'}} sx={{color:'#fff' ,px:4}}>
                  {channelTitle}<CheckCircle sx={{fontSize:'12px', color:'gray',pl:'5px'}}/>
                </Typography>
                </Link>
                <Stack direction='row' sx={{color:'#fff',alignItems:'center'}}>
                  <Typography variant='body1' sx={{opacity:'0.8',paddingX:'5rem'}}>
                    {parseInt(viewCount).toLocaleString()} : views
                  </Typography>
                  <Typography sx={{opacity:'0.8'}}>
                    {parseInt(likeCount).toLocaleString()} : Likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
      <Box sx={{ justifyContent: 'center', alignItems: 'center', px:{md:2,sm:5},py:2}}>
      <Video videos={relatedVideos} direction='column'/>
        </Box>
        </Stack>
    </Box>
  )
}

export default VideoPlayer