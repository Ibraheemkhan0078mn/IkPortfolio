import React, { useRef, useState } from 'react'
import MyContext from './MyContext'

const ContextProvider = ({ children }) => {


  let gsapTimeLineRef = useRef(null)
  const [mode, setMode] = useState("Home")





  return (
    <MyContext.Provider value={{
      gsapTimeLineRef,
      mode, setMode

    }}>





      {children}

    </MyContext.Provider>
  )
}

export default ContextProvider