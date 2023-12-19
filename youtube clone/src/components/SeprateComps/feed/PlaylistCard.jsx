import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {CheckCircle} from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../../utils/constant'
const PlaylistCard = ({ playInfo:{id:{playlistId},snippet} }) => {
  return (
      <>
          <Card sx={{ width: { md: "358px", xs: '100%' }, boxShadow: 0, border: 'none', background: '#1e1e1e'}}>
              <Link to={playlistId ? `playlist/${playlistId}` : demoVideoUrl}>
                  <CardMedia
                      image={snippet?.thumbnails?.high?.url||demoThumbnailUrl}
                      alt={snippet?.title}
                      sx={{ width: '100%', height:180,borderRadius:{md:'8px',sx:'0px'}}}
                  /> 
              <CardContent 
                      sx={{ width: 'auto', height: { md: "5rem", xs: "auto" }, border: 'none', }}>
                      <Link to={playlistId ? `video/${playlistId}` : demoVideoUrl}>
                      <Typography variant='subtitle1'  sx={{textAlign:'center',fontWeight:'bold',color:'#fff' ,bgcolor:'#FC1503',borderRadius:'1rem'}}>
                             PLAYLIST
                          </Typography>
                          <Typography variant='subtitle1' fontWeight='bold'color='#fff'>
                              {snippet?.title.slice(0,60)+' :-'|| demoVideoTitle.slice(0,60)}
                          </Typography>
                      </Link>
                      </CardContent>
                </Link>
          </Card>

      </>
  )
}

export default PlaylistCard