import { useState } from 'react'
import Music from './music'
import React from 'react'
import Display from './Display'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{height:"100vh",width:"100vw",backgroundColor:'black', display:'flex'}}>
        <div>
         <Music/>
         </div>
         
      </div>
    </>
  )
}

export default App
