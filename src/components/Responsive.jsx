import { useContext } from 'react'
import { Context as ResponsiveContext } from './ResponsiveContext'

const Responsive = ({ on, children }) => {
  const screen = useContext(ResponsiveContext)
  return (typeof on === 'function') ? (on(screen) ? children : null) : children
}

export default Responsive
