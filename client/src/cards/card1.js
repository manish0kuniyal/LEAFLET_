import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../image/plant-6347424-5242126.png'
import '../index.css'
const Card1 = () => {
  return (
    <div>
{/*     
    <div
        className='border-2 plant-crd  h-[auto] flex justify-around items-center   '
     >
      
      <img
    className='  drop-shadow-2xl w-[2vmin]  
    '
    src={img1}
      alt=''
  />
   <div
    className=' text-lg text-white w-[48%] '
   >
    <h1
    className=' text-[5vmin] font-bold '
    >NATURE PLUS </h1>
    <br/>
    <p
     className='text-base text-gray-300'
    >Leaflet , veiling the wonders of plant life.</p>
       <br/>
       <Link className='search' to='/search'>
    <button
    className='font-bold text-sm border-2 px-6 py-1 hover:bg-gray-200 hover:text-black '
    >EXPLORE</button></Link>
   </div>
    </div> */}

     <div
     className='flex justify-evenly items-center'
     >
   {/* <div className='border-2 w-[50%] h-[auto]'>
              
      <img
    className='  drop-shadow-2xl w-[50%] '
     src={img1}
      alt=''
  /> </div> */}

  <div className=' w-[100%] h-[23vh] flex flex-col items-center justify-center '>
  <h1
    className=' font-bold  text-[5vmin] text-center'
    ><b>NATURE</b> <b className='text-[#03a678]'>PLUS</b> </h1>
  <br/>
    {/* <p
     className='text-[2.2vmin] font-bold text-center'
    > “Leaflet , veiling the wonders of plant life.”</p> */}

       <Link className='search' to='/search'><br/>
    <button
    className=' bg-[#a8bdb5] w-[26vmin] mx-4 h-8 font-bold hover:bg-[#03a678] hover:text-white'
    >EXPLORE</button></Link>
  </div>

     </div>

      </div>
  )
}
export default Card1
