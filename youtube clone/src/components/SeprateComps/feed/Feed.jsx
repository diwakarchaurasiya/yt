import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { Stack, Typography, Box } from '@mui/material'
import { fetchDataApi,sampleResponse } from '../../utils/fetchDataApi'
import Video from './Video'
const Feed = () => {
  const [seletcedCat,setSeletedCat] = useState('New')
  const [videos,setVideos] = useState([])
  useEffect(() => {
    try {
      fetchDataApi(`search?part=snippet&q=${seletcedCat}`)
      .then((data) => {
        setVideos(data.items)
    })
    } catch (error) {
      console.log('got error in loading data ' + error)
    }
    // setVideos(sampleResponse)
  }, [seletcedCat])
  useEffect(() => { setVideos('') }, [seletcedCat]);
  console.log(videos)
  return (
    <>
      <Stack sx={{ display: 'flex', flexDirection: { sx: 'column', md: 'row' },paddingTop:'4rem'}}>
        <Box sx={{ height: { sx: "auto", md: "100%" }, borderRight: "4px solid #3d3d3d", padding: { sx: 0, md: 2 } }}>
          <SideBar seletcedCat={seletcedCat} setSeletedCat={setSeletedCat}/>
        </Box>
        <Box sx={{overflowY:"auto",height:"90vh",flex:2}}>
          <Typography variant='h4' fontWeight='bold' color='#fff' margin='20px' fontSize={{lg:"30px",xs:'15px'}}>
            {seletcedCat} <span style={{color:"red"}}>videos</span>
          </Typography>
          <Video videos={videos} />
        </Box>
    </Stack>
        
    </>
    
  )
}

export default Feed