# react-responsive-context
A React context wrapper to handle responsive scenarios

## Installation
You can easily install the library via npm by running the following command:
```bash
npm install --save @fiad/react-responsive-context
```

## Usage
As first step, you need to import the context provider from library and implement it in your application, as follows:
```javascript
import React, { Component } from 'react'
import ResponsiveContext from '@fiad/react-responsive-context'
import MyResponsiveComponent from 'path/to/my/components/MyResponsiveComponent'

class App extends Component {
  render() {
    return (
      <ResponsiveContext>
        <MyResponsiveComponent />
      </ResponsiveContext>
    )
  }
}

export default App
```

A global responsive context will be now available and the following data will be accessible from its child components:

<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>width</td>
    <td>int</td>
    <td>Corresponds to window.innerWidth</td>
  </tr>
  <tr>
    <td>height</td>
    <td>int</td>
    <td>Corresponds to window.innerHeight</td>
  </tr>
  <tr>
    <td>orientation</td>
    <td>string</td>
    <td>Represents screen orientation ("landscape" or "portrait")</td>
  </tr>
  <tr>
    <td>touch</td>
    <td>boolean</td>
    <td>Indicates if device has touch or not</td>
  </tr>
</table>


At this point, according to your needs, you have two choices:

### 1. Using built-in *Responsive* component
If you simply need to handle responsive-based conditional rendering, the library provides an utility component that helps you with this goal. You can easily implement it as shown below:
```javascript
import React from 'react'
import { Responsive } from '@fiad/react-responsive-context'

const MyResponsiveComponent = () => {

  return (
    <Responsive on={({ width }) => (width < 1024)}>
      <div>Mobile version</div>
    </Responsive>

    <Responsive on={({ width }) => (width >= 1024)}>
      <div>Desktop version</div>
    </Responsive>
  )
}

export default MyResponsiveComponent
```

As you can see, the *on* property expects a callback function from which you can access context's data and use them to match your scenario. Remember that the callback must return a boolean value representing your checking result.

### 2. Accessing context data directly
In some scenarios, you may instead need to have access to context's data in order to use them directly in your component's logic. In that case, you can use both React's *hooks* and *Context API* depending on how your component has been implemented. Lets see both examples:

#### *useContext* (hook)
```javascript
import React, { useContext } from 'react'
import { Context as ResponsiveContext } from '@fiad/react-responsive-context'

const MyResponsiveComponent = () => {
  const { width, height, orientation, touch } = useContext(ResponsiveContext)
  {/* make your own stuff here with context's data */}
  return <h1>My responsive component</h1>
}

export default MyResponsiveComponent
```

#### *contextType* (Context API)
```javascript
import React, { Component } from 'react'
import { Context as ResponsiveContext } from '@fiad/react-responsive-context'

class MyResponsiveComponent extends Component {
  static contextType = ResponsiveContext

  render() {
    const { width, height, orientation, touch } = this.context
    {/* make your own stuff here with context's data */}
    return <h1>My responsive component</h1>
  }
}

export default MyResponsiveComponent
```