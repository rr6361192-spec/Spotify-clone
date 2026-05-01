import React from 'react'
import Navbar from './Navbar'
import {  albumsData } from './assets/assets'
import {  songsData } from './assets/assets'
import Songs from './Songs'
import Album from './Album'
import Display from './Display'
function Home() {
  return (
    <>
    <div>
      <Navbar/>
      </div>
      <div>
      <div style={{position:'relative',top:'10PX',left:'20px'}}>
        <h2 style={{color:'white'}}>Featured Charts</h2>
      </div>
      <div style={{display:'flex', position:'relative',top:'10px',gap:'15px'}}>
        
      {albumsData.map((items,index)=>(<Songs key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}
      />))}
      </div>
      </div>
       <div style={{position:'relative',top:'30PX',left:'30px'}}>
        <h2 style={{color:'white'}}> Today's Top Songs</h2>
      </div>
      <div style={{display:'flex',position:"relative",top:'40px',gap:'15px'}}>
        
      {songsData.map((items,index)=>(<Album key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}
      />))}
      </div>
    </>
    
  )
}

export default Home
