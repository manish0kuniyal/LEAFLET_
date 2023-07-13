import React, {  useEffect, useState } from 'react'
import Axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../index.css'

export const Users = ({isDark}) => {

  const[data,setData]=useState([])
useEffect(()=>{
  Axios.get('http://localhost:5000/getuser')
  .then((response)=>{
    const newData = [...response.data];
    newData.reverse();
    setData(newData)
  })
  .catch((err)=>console.log(err))
})
  return (
   
    <div style={{minHeight:'100vh'}}
    className={`ml-[4%]  w-[96%] h-auto text-gray-500  h-[100vh] ${isDark ? 'bg-[#080d14]':'bg-[#d4d9d6]'  }`}>
    {/* <h1 
    className='font-bold text-xl text-[#03a678] text-center '>LEAFLET USERS</h1> */}
    <br/>
    <div className=' flex flex-wrap justify-center '>
      {data.map((item)=>{
        return(
          <>
          <div
          className={`user-crd flex overflow-hidden flex-col border-[15%] w-[35vmin] rounded-[15px] h-[auto] py-4 m-4 px-2  hover:bg-[#2d3c54] ${isDark ?  'bg-[#171e29]':'bg-[#aaadab]'}`}
          >
          <div 
            className=' flex flex-row '>
        <AccountCircleIcon
            className='   mr-2'
              style={{fontSize:'2rem'}}/>
        <h2 className='text-gray-200 font-bold'>{item.name}</h2>
    
        </div>

        <h3 className='m-4 text-[#03a678] '> “{item.msg}”</h3><br/><br/>
        </div>
        

        </>)
      })}
    </div>
        </div>
  )
}

export default Users
