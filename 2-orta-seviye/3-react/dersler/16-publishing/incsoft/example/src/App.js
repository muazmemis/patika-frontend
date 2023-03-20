import React from 'react'

import { Paragraph, Button } from 'incsoft'
import 'incsoft/dist/index.css'

const App = () => {
  return (
    <>
      <Paragraph text='Create React Library Example 😄' />
      <Button text='Click' onClick={() => console.log('merhaba')} />
    </>
  )
}

export default App
