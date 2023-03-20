import React from 'react'

import { Button } from 'mmbtnui'
import 'mmbtnui/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='b-primary'>Primary Button</Button>
      <Button type='b-default'>Default Button</Button>
      <Button type='b-dashed'>Dashed Button</Button>
      <br />
      <Button type='b-text'>Text Button</Button>
      <Button type='b-link' href='...'>
        Link Button
      </Button>
    </>
  )
}

export default App