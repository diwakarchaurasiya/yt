import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import PlaylistCard from './PlaylistCard'
const Video = ({ videos, direction }) => {
  if(!videos?.length) return <img src='https://static.vecteezy.com/system/resources/previews/010/856/652/non_2x/no-result-data-document-or-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vector.jpg' width='100vw' height='100vh'/>
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='space-evenly' gap={4} sx={{scrollBehavior:'smooth'}}>
      {videos.map((item, idx) => (
         <Box key={idx} style={{ color:'white' }}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.playlistId && <PlaylistCard playInfo={item} />}
          {item?.id?.channelId && <ChannelCard channelInfo={item} />}
        </Box>
      ))}
    </Stack>
      )
    }
      
 

export default Video