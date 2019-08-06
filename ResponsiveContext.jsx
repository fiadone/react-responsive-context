import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

const ResponsiveContext = ({ children }) => {
    const [device, setDevice] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        mobile: isMobile(),
        orientation: getOrientation(),
        touch: hasTouch()
    })

    useEffect(() => {
        const handler = () => {
            setDevice(prevState => ({
            ...prevState,
            width: window.innerWidth,
            height: window.innerHeight,
            mobile: isMobile(),
            orientation: getOrientation()
          }))
        }
        
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
        // eslint-disable-next-line
    }, [])

    return <Context.Provider value={device}>{children}</Context.Provider>
}

export default ResponsiveContext

export { Context }

/**
 * Checks if current device has mobile size
 * @param breakpoint
 * @returns {boolean}
 */
export function isMobile(breakpoint = 1024) {
    return window.innerWidth < breakpoint
}
  
/**
 * Checks if current device has touch
 * @returns {boolean}
 */
export function hasTouch() {
    return 'ontouchstart' in window
}
  
/**
 * Current device screen orientation getter
 * @returns {string}
 */
export function getOrientation() {
    return window.innerWidth >= window.innerHeight ? 'landscape' : 'portrait'
}
  