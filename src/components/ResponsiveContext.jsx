import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

const getInfo = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  orientation: window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait',
  touch: 'ontouchstart' in window
})

const ResponsiveContext = ({ children }) => {
  const [info, setInfo] = useState({})
  const updateInfo = () => setInfo(getInfo())

  useEffect(() => {
    updateInfo()
    window.addEventListener('resize', updateInfo, { passive: true })
    return () => window.removeEventListener('resize', updateInfo, { passive: true })
    // eslint-disable-next-line
  }, [])

  return <Context.Provider value={info}>{children}</Context.Provider>
}

export default ResponsiveContext

export { Context }
