import { useContext } from 'react'
import { Context as ResponsiveContext } from './ResponsiveContext'

const Responsive = ({ on, children }) => {
  const screen = useContext(ResponsiveContext)
  const width = typeof on.width !== 'function' || on.width(screen.width)
  const height = typeof on.height !== 'function' || on.height(screen.height)
  const orientation = !on.orientation || screen.orientation === on.orientation
  const touch = typeof on.touch !== 'boolean' || screen.touch === on.touch
  const match = width && height && orientation && touch

  return match ? children : null
}

export default Responsive
