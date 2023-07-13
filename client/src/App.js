import React, { useContext, useState } from 'react'
import { Sidebar } from './sidebar'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './index.css'
import { LeafletContext } from './context';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Display from './pages/display';
import Search from './pages/search';
import Users from './pages/users';
import Info from './pages/info';
import Grid from './grid';
import { AppContext } from './context';
export const App = () => {
        // const {isDark,setDark,toogleDark }=useContext(AppContext)
        const [isDark, setDark] = useState(true);
        const toogleDark = () => {
          setDark(!isDark);
        };
  return (
    
    <div>
      <Router>
      <div className=" h-screen  flex flex-col  font-sans">
      

          <div className={`ml-[7vmin] mt-[-2px] flex flex-row justify-between ${isDark ? 'bg-[#080d14]':'bg-[#d4d9d6]'  } `}   >
            <div
            className='ml-6 mt-2'
            >
              <h3
               className='text-xs font-bold text-[#7eccb6]'
              >Dash</h3>
            <h1
            className='text-xl font-bold text-[#03a678] mt-[-7px]'
            >Leaflet</h1> 
            </div>
            <Brightness4Icon
              onClick={toogleDark}
              className={`text-[#5849bf] float-right mt-2 mr-10 ${isDark ? 'text-[#ededed]':  'text-[#212121]'}`}
              style={{ fontSize: "1.5rem" }}
            />
          </div>

          <div >
          <Sidebar
          isDark={isDark} />

          <Routes>
            <Route path='/' element={<Grid isDark={isDark}/>}/>
            <Route path='/search' element={<Search isDark={isDark}/>}/>
            <Route path='/display' element={<Display isDark={isDark}/>}/>
            <Route path='/users' element={<Users isDark={isDark}/>}/>
            <Route path='/info' element={<Info isDark={isDark}/>}/>
          </Routes>

        </div>
           
          <div>

        </div>
      </div>
      </Router>
    </div>
    
  );
}
