import React from 'react'
import ResponsiveContext, { Responsive } from './components'

const App = () => (
  <ResponsiveContext>
    <Responsive on={({ width }) => (width < 1024)}>
      <p>Mobile component</p>
    </Responsive>

    <Responsive on={({ width }) => (width >= 1024)}>
      <p>Desktop component</p>
    </Responsive>

    <Responsive on={({ orientation }) => (orientation === 'landscape')}>
      <p>Landscape component</p>
    </Responsive>

    <Responsive on={({ orientation }) => (orientation === 'portrait')}>
      <p>Portrait component</p>
    </Responsive>

    <Responsive on={({ touch }) => touch}>
      <p>Touch component</p>
    </Responsive>
  </ResponsiveContext>
)

export default App
