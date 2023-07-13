import React from 'react'
import { Link } from 'react-router-dom';

import "./index.css"
import FaceIcon from '@mui/icons-material/Face';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Groups3Icon from '@mui/icons-material/Groups3';
import GrassIcon from '@mui/icons-material/Grass';

export function Sidebar({isDark}) {

  return (
 <div>
    <div className={`fixed top-0 left-0 h-screen w-[8vmin]
    flex flex-row justify-around items-center text-base ${isDark ? 'bg-[#0b111a]':'bg-[#f0f0f0]'  }
    `}>
    <div 
    className=' fixed top-0 mr-0  h-[32rem]
    flex flex-col justify-evenly 
      mt-8 '>
   <Link to='/'>  <GrassIcon
     className=' sidebar  text-[#03a678] hover:text-[#2fd426]'
     style={{fontSize:'1.6rem'}}
   /> </Link>

  <Link className='search' to='/search'> <TravelExploreIcon
    className=' sidebar text-[#0380a6] hover:text-[#2fd426] '
    style={{fontSize:'1.6rem'}}
   /></Link>

   <Link className='display' to='/display'>
   <LocalFloristIcon
    className=' sidebar text-[#03a678] hover:text-[#2fd426]'
    style={{fontSize:'1.6rem'}}
   /></Link>

   <Link className='users' to='/users'>   <Groups3Icon
    className=' sidebar text-[#03a6a1]  hover:text-[#2fd426]'
    style={{fontSize:'1.6rem'}}
   /></Link>

    </div>
    <div
     className='w-16  text-center mt-[80vmin]'
    >
   <Link className='info' to='/info'>
   <FaceIcon
    className='text-[#b4ccc5] hover:text-[#2fd426]  '
    style={{fontSize:'1.6rem'}}
   /></Link></div>
    </div>
    </div>
  )
}
