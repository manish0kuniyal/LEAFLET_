import React from 'react'
import { createContext,useState,useEffect } from 'react'
import "./index.css"

export const AppContext=createContext(null)
export const LeafletContext=(props)=>{
      const [isDark, setDark] = useState(true);
const toogleDark = () => {
  setDark(!isDark);
};

      let x="from context"
      return(
        <AppContext.Provider
        value={{isDark,setDark,toogleDark}}
        >
            {props.children}
        </AppContext.Provider>

      )
}