import React from 'react'

import { ExampleComponent, Button } from 'incsoft'
import 'incsoft/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button text='Click' onClick={() => console.log('merhaba')} />
    </>
  )
}

export default App
