import React from 'react'
import Side from './Component/Side'
import Player from './Component/player'
import Display from './Display'
function Music() {
  return (
    <>
    <div  style={{width:'100%',display:'flex',gap:'10px'}}>
      <div>
      <Side/>
      </div>
      <div style={{width:'1800px',backgroundColor:'rgba(20, 20, 16, 0.63)'}}>
        <Display/>
      </div>
    </div>
    <div style={{position:'relative',top:'50px'}}>
    <Player/>
    </div>
    </>
  )
}

export default Music
