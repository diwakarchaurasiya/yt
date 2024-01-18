import React from 'react'
import { Stack,Box ,Card} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import PlaylistCard from './PlaylistCard'
import '../../../index.css'
const Video = ({ videos, direction }) => {
  if (!videos?.length) return (
    <Card style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center'}}>
    <div className='card'>
      <div className='skelton image'></div>
      <div className='skelton heading'></div>
      <div className='skelton text'></div>
      <div className='skelton text'></div>
    </div>
    <div className='card'>
      <div className='skelton image'></div>
      <div className='skelton heading'></div>
      <div className='skelton text'></div>
      <div className='skelton text'></div>
    </div>
    <div className='card'>
      <div className='skelton image'></div>
      <div className='skelton heading'></div>
      <div className='skelton text'></div>
      <div className='skelton text'></div>
    </div>
    <div className='card'>
      <div className='skelton image'></div>
      <div className='skelton heading'></div>
      <div className='skelton text'></div>
      <div className='skelton text'></div>
    </div>
    <div className='card'>
      <div className='skelton image'></div>
      <div className='skelton heading'></div>
      <div className='skelton text'></div>
      <div className='skelton text'></div>
    </div>
    <div className='card'>
      <div className='skelton image'></div>
      <div className='skelton heading'></div>
      <div className='skelton text'></div>
      <div className='skelton text'></div>
    </div>
      </Card>
  );
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