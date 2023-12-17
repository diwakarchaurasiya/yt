import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Video = ({videos}) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='space-evenly' gap={2} sx={{scrollBehavior:'smooth',display:{md:'flex'}}}>
      {videos.map((item, idx) => (
         <Box key={idx} style={{ color:'white' }}>
          {item?.id?.videoId && <VideoCard video={item} width />}
          {item?.id?.channelId && <ChannelCard channelInfo={item} />}
        </Box>
      ))}
    </Stack>
      )
    }
      
 

export default Video