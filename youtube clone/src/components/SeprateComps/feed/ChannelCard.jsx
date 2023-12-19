import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { demoProfilePicture,demoChannelTitle,demoChannelUrl } from '../../utils/constant'
import {Link} from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
const ChannelCard = ({ channelInfo,marginTop }) => {
  console.log(channelInfo)
  return (
    <Box sx={{borderRadius:20, width: { md: "358px", xs: '100%' }, boxShadow: 0, border: 'none',margin:'auto',marginTop}}>
      <Link to={`/channel/${channelInfo?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex', justifyContent: "center", alignItems: 'center',
          flexDirection:'column',color: '#fff'
        }}>
          <CardMedia style={{ padding: 3 }}
            image={channelInfo?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelInfo?.snippet?.tittle}
            sx={{ width: "180px",height:'180px',borderRadius:'50%', border:'2px dashed red',mb:2}}
          />
          <Typography variant='h6' style={{fontWeight:'bold'}}>
            {channelInfo?.snippet?.title}
            <CheckCircle sx={{fontSize:14, color:'gray',ml:'3px'}}/>
          </Typography>
          {channelInfo?.statistics?.subscriberCount && (
            <Typography variant='subtitle2' fontWeight='bold'color='gray' mt={2}>
              {parseInt(channelInfo?.statistics?.subscriberCount).toLocaleString()} Subsriber
            </Typography>
          )}
        </CardContent>
    </Link>
    </Box>
  )
}

export default ChannelCard