import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

const ResponsiveContext = ({ children }) => {
  const [info, setInfo] = useState({})

  useEffect(() => {
    const updateContext = () => {
      setInfo({
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait',
        touch: 'ontouchstart' in window
      })
    }

    window.addEventListener('resize', updateContext, { passive: true })

    return () => window.removeEventListener('resize', updateContext, { passive: true })
    // eslint-disable-next-line
  }, [])

  return <Context.Provider value={info}>{children}</Context.Provider>
}

export default ResponsiveContext

export { Context }
