import React, { useState } from 'react'
import Axios from 'axios'

import Groups3Icon from '@mui/icons-material/Groups3';

export const Info = ({isDark}) => {
 const[name,setName]=useState('')
 const[msg,setMsg]=useState('')


 const CreateUser=({isDark})=>{
  Axios.post("http://localhost:5000/user",{
    name,
    msg
  }).then((response)=>{
    alert(`Mesage Saved Navigate to group icon`)
  })

}

  return (
    <div className={`h-[95vh] flex justify-center  items-center pb-[200px] ${isDark ? 'bg-[#080d14]':'bg-[#d4d9d6]'  } `}>
    <div className={`ml-[8vmin] text-white    p-6 flex flex-col  px-16  w-[auto] h-[auto]  ${isDark ?  'bg-[#171e29]':'bg-[#aaadab]'}`}>
      <h2
      className='font-bold text-l text-[#03a678]'
      > SEND A MESSAGE</h2>
     <br/><br/>
      <input 
      className={`bg-[transparent]  border-t-[transparent] border-r-[transparent] border-b-[#03a678] border-l-[transparent] border-2 font-bold `}
      type='text' placeholder='Name...'
      onChange={(event)=>{
         setName(event.target.value)
      }}
      />
      <br/> <br/>
      <input 
      className='bg-[transparent] border-t-[transparent] border-r-[transparent] border-b-[#03a678] border-l-[transparent] border-2 text-[white] font-bold'
      
      type='text' placeholder='Message...'
      onChange={(event)=>{
         setMsg(event.target.value)
      }}
      />
      <br/> <br/>
      <button 
      className='bg-[#95dbc7] text-black font-bold p-2 hover:bg-[#03a678] '
      onClick={CreateUser}>SEND </button>

<br/> <br/>
      <br/> 
    </div>
    </div>
  )
}

export default Info
