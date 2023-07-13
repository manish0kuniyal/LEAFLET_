import React from 'react'

import './index.css'
import Card1 from './cards/card1';
import Card2 from './cards/card2';
import Card3 from './cards/card3';
import Card4 from './cards/card4';
import Card5 from './cards/card5';
const Grid = ({isDark}) => {
  return (
    <div>
          {/* grid  */}
         
 <div className={` griddy ml-[8vmin] w-[auto] h-[96vh] grid  gap-x-6 b-10 grid-cols-3 grid-rows-3 gap-4 px-4  py-6 pb-10 ${isDark ? 'bg-[#080d14]':'bg-[#d4d9d6]'  }`}>

  <div className="bg-[#b4ccc5] gridfirst  col-span-2 row-span-1 w-full h-full
  rounded-[3vmin]">
  <Card1 />
  </div>

  <div className=" grid-2  rounded-[3vmin] bg-[#03a678] col-span-1 row-span-1 w-full h-full">
    <Card2/>
  </div>


  <div className=" grid-3 bg-black col-span-3 row-span-1 w-full h-full  rounded-[3vmin]">
 <Card3/>
  </div>
{/* 
  <div className="bg-[#b4ccc5]  grid-4 col-span-1 row-span-1 w-full h-full rounded-[3vmin]">
    <Card4/>
  </div> */}

  <div className=" grid-2 rounded-[3vmin] bg-[#03a678] col-span-3 row-span-1 w-full h-full ">
   <Card5/> </div>
</div>

    </div>
  )
}

export default Grid
