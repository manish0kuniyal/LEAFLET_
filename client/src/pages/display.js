import React from 'react'
import { useState,useEffect } from 'react'
import Axios from 'axios'
import "../index.css"
import img1 from '../image/plant-6347424-5242126.png'

export const Display = ({isDark}) => {
  
const [edible,setedible]=useState([])
useEffect(()=>{
  Axios.get("http://localhost:5000/edible")
  .then((response)=>{setedible(response.data)})
  .catch((err)=>console.log(err))
},[])

const [datax,setdatax]=useState([])
  useEffect(()=>{
    Axios.get("http://localhost:5000/plant")
    .then((response)=>{setdatax(response.data)})
    .catch((err)=>console.log(err))
  },[])

  
const [indoor,setindoor]=useState([])
useEffect(()=>{
  Axios.get("http://localhost:5000/indoor")
  .then((response)=>{setindoor(response.data)})
  .catch((err)=>console.log(err))
},[])

  const limitededible=edible.slice(0,31)
  const limiteddatax=datax.slice(0,31)
  const limitindoor=indoor.slice(0,31)

  return (<>
    <a id="top"></a>
    <div style={{minHeight:'100vh'}}
    className={` ml-[4%]  py-6 w-[96%] h-[auto] flex-col   ${isDark ? 'bg-[#080d14]':'bg-[#d4d9d6]'  }`}>
     
       <div className=' text-[#03a678] ml-[5%]  border-2 flex justify-around'>
        
<a href="#poisonous">Poisonous</a>
<a href="#edible">Edible</a>
<a href="#indoor">Indoor Plants</a>
       </div>
       <br/>
       <br/>
       <br/>
         
       <div>
         <a id="poisonous"></a>
        <h2 className='text-[#03a678] font-bold  text-xl ml-[5%]'>Poisonous</h2>
      <div className="flex flex-wrap justify-center ml-[3vmin] mt-6">
        
        {limiteddatax.map((item) => (
          <div
            key={item.id}
            className={` info-card border-1 mx-2 py-2 px-2 flex flex-col flex-wrap  rounded-[2px] w-[25vmin] h-[28vmin] mb-10 hover:scale-110 hover:bg-[#2d3c54]  ${isDark ?  'bg-[#171e29]':'bg-[#aaadab]'} `}
          >
            <img
              className="  w-[20vmin] h-[20vmin] mx-auto mt-[-20px] hover:scale-110"
              src= {item.default_image.original_url} 
              alt="PLANT IMAGE"
            />
         <div className='text-center mt-2 font-bold'>
            <h2 className="font-bold text-[2vmin] text-[#ede6e6]">
 {item.common_name}</h2>
          </div>
          </div>
        ))}
      </div>
</div>



      <div className='text-white ml-[5%]'>
        
         <div>
          
         <a id="edible"></a>
        <h2 className='text-[#03a678] font-bold  text-xl ml-[5%]'>Edible</h2>
      <div className="flex flex-wrap justify-center ml-[3vmin] mt-6">
       
        {limitededible.map((item) => (
          <div
            key={item.id}
            className={` info-card border-1 mx-2 py-2 px-2 flex flex-col flex-wrap  rounded-[2px] w-[25vmin] h-[28vmin] mb-10 hover:scale-110 hover:bg-[#2d3c54]  ${isDark ?  'bg-[#171e29]':'bg-[#aaadab]'} `}
          >
            <img
              className="  w-[20vmin] h-[20vmin] mx-auto mt-[-20px] hover:scale-110"
              src= {item.default_image.original_url} 
              alt="PLANT IMAGE"
            />
         <div className='text-center mt-2 font-bold'>
            <h2 className="font-bold text-[2vmin] text-[#ede6e6]">
 {item.common_name}</h2>
          </div>
          </div>
        ))}
      </div>
</div>

       </div>

       <br className='text-[#03a678]'/>

      <div className=' text-white ml-[5%]'>
        
         <div>
         <a id="indoor"></a>
        <h2 className='text-[#03a678] font-bold text-xl ml-[5%]'>Indoor</h2>
      <div className="flex flex-wrap justify-center ml-[3vmin] mt-6">
       
        {limitindoor.map((item) => (
          <div
            key={item.id}
            className={` info-card border-1 mx-2 py-2 px-2 flex flex-col flex-wrap  rounded-[2px] w-[25vmin] h-[28vmin] mb-10 hover:scale-110 hover:bg-[#2d3c54]  ${isDark ?  'bg-[#171e29]':'bg-[#aaadab]'} `}
          >
            <img
              className="  w-[20vmin] h-[20vmin] mx-auto mt-[-20px] hover:scale-110"
              src= {item.default_image.original_url} 
              alt="PLANT IMAGE"
            />
         <div className='text-center mt-2 font-bold'>
            <h2 className="font-bold text-[2vmin] text-[#ede6e6]">
 {item.common_name}</h2>
          </div>
          </div>
        ))}
      </div>
</div>
   
<a href="#top" className='text-[#03a678] font-bold text-xl ml-[5%]'>backtotop</a>
       </div>

    </div>

 
    </>
);
  
}

export default Display
