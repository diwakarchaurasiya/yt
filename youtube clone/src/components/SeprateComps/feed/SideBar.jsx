import React, { useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { categories } from '../../utils/constant'

const SideBar = ({seletcedCat,setSeletedCat}) => {
   
    return (
        <>
        <Stack direction='row' sx={{ overflowY: "auto", height: { sx: "auto", md: '95vh' }, flexDirection: { md: 'column' ,position:{xs:'fixed'}}  }}
        >
            {categories.map((category) => {
                return (
                    <button className='category-btn' style={{ background: seletcedCat === category.name && '#FC1503', color: '#fff' }}
                        onClick={() => {
                            setSeletedCat(category.name)
                            }}
                        key={category.name}
                    >
                    <span style={{color:category.name===seletcedCat? "white":"#FC1503",marginRight:'10px'}}> {category.icon}</span>
                    <span >{category.name}</span>
                    </button>
                )
            })}
            
        </Stack>
           
            </>
    )
}

export default SideBar