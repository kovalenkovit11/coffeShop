import React from 'react'
import OpenCardRightSide from '../OpenCardRightSide/OpenCardRightSide'
import Slider from '../Slider/Slider'
import './style.scss'
const OpenCard = () => {
  return (
    <div className='container'>
        <div className='open-card-items'>
            <Slider/>
            <OpenCardRightSide/>
        </div>
    </div>
  )
}

export default OpenCard