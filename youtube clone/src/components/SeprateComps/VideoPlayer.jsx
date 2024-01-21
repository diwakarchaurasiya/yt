import React from 'react'
import { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player' 
import { Box, Typography, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { fetchDataApi } from '../utils/fetchDataApi'
import Video from './feed/Video'
import VideoSkeleton from '../skeltonPages/VideoSkeleton'
const VideoPlayer = () => {
  let [playAbleVideos,setPlayAbleVideos ]= useState([])
  let [relatedVideos, setrelatedVideos] = useState([])
  const { id } = useParams();
  useEffect(() => {
   try {
    fetchDataApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setPlayAbleVideos(data.items[0])
    )
  fetchDataApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setrelatedVideos(data.items)
    )
   } catch (error) {
    console.log('got an error' + error)
   }
  }, [id])
  useEffect(() => {
    setrelatedVideos('')
    setPlayAbleVideos('')  }
    , [id])
  if (!playAbleVideos?.snippet) return (
    < Box height='95vh'>
      <Stack flexDirection={{ xs: 'column', md: 'row' }} >
        <Box sx={{ width: '80%', height: '70vh', top: '100px', background: '#fff', margin: ' 2rem 0 5px 2rem' }} className='skelton'>
        </Box>
        <Box sx={{ justifyContent: 'center', alignItems: 'center', px: { md: 2, sm: 5 }, py: 2, width: { xs: '100%' ,md:'420px'},height:'100vh',overflow:'auto'}}>
<VideoSkeleton/>
<VideoSkeleton/>
<VideoSkeleton/>
<VideoSkeleton/>
<VideoSkeleton/>
        </Box>
    </Stack>
  
  </Box>
  )
  let { snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount} } = playAbleVideos;
  return (
    <Box>
      <Stack flexDirection={{ xs: 'column',md:'row'} }>
        <Box flex={1} paddingX={2}> 
          <Box sx={{ width: '100%', position: 'sticky', top: '90px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' playing={true}  loop={true} controls={true} sx={{ borderRadius: '20px', height: '70vh', width: '100vw' }}/>
            <Typography  variant='h5' sx={{color:'#fff',fontWeight:'bold',p:2}}>
              {title}
            </Typography>
            <Stack direction={{ md:'row',xs:'column'}} justifyContent={{md:'space-between',xs:'center'}} color='#fff' py={2} px={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography  sx={{fontSize:'30px',color:'#fff' ,px:4}}>
                  {channelTitle}<CheckCircle sx={{fontSize:'12px', color:'gray',pl:'5px'}}/>
                </Typography>
                </Link>
                <Stack sx={{color:'#fff',alignItems:'center',direction:{lg:'row',sx:'column'}}}>
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
        <Box sx={{ justifyContent: 'center', alignItems: 'center', px: { md: 2, sm: 5 },height:'100vh', py: 2, width: { xs: '100%' ,md:'370px'},overflow:'auto'}}>
      <Video videos={relatedVideos} direction='column'/>
        </Box>
        </Stack>
    </Box>
  )
}

export default VideoPlayer