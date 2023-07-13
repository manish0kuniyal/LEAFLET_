import React, {  useEffect, useState } from 'react'
import Axios from 'axios'
import "../index.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Card2 = () => {
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

const firstItem = data.slice(0,3)
return (
  <div  className='home-usr overflow-hidden px-1 h-[100%] flex  flex-col justify-around '
   >
    {/* <h1
    className='font-bold mb-[-20px] text-gray-300'
    >USERS</h1> */}
  {firstItem.map((item,index) => (
    <div key={item.id}
    className='bg-black rounded-[10px]  '>
      <div
            className='h-[30%] flex justify-center py-2 '>
          <div >
        <AccountCircleIcon
            className=' text-[#b4ccc5]   mr-2'
              style={{fontSize:'1.3rem'}}/></div>
      
      <div 
      className=' font-bold text-white text-sm'>{item.name}</div>

      </div>
    </div>
  ))}
</div>
);
}

export default Card2
