import React from 'react'
import {Stack, Typography} from '@mui/material';
import Icon from '../assets/assets/icons/gym.png';

const BodyPart = (item, setBodyPart, bodyPart) => {
  return (
    <Stack type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item ?{
        borderTop: '4px solid #ff2625',
        backgroundColor:'#fff',

      }: ''

    }>

    <img src={Icon} alt="dumbell" styles={{width: '4px', height:'40px'}}/>
    
    </Stack>
  )
}
export default BodyPart

 