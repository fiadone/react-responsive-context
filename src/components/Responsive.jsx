import { useContext } from 'react'
import { Context as ResponsiveContext } from './ResponsiveContext'

const Responsive = ({ on, children }) => {
  const screen = useContext(ResponsiveContext)

  if (typeof on !== 'function') {
    return children
  }

  return on(screen) ? children : null
}

export default Responsive
