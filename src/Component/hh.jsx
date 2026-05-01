import React from 'react'
import{assets} from '../assets/assets'

function Side() {
  return (
<>
    <div style={{width:'300px',height:'100%',backgroundColor:'#121212b9',display:'flex',flexDirection:'column',gap:'50px'}}>
        <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
      <img src={assets.home_icon}></img>
      <p style={{fontWeight:'bold', color:'white'}}>Home</p>
    </div>
    <div style={{display:'flex',gap:'10px'}}>
      <img src={assets.search_icon}></img>
      <p style={{fontWeight:'bold', color:'white'}}>Search</p>
    </div>
   
  </div>
   <div style={{width:'300px',height:'100%',backgroundColor:'#121212b9',display:'flex',flexDirection:'row',gap:'50px',position:'relative',top:'20px'}}>
        <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
      <img src={assets.stack_icon}></img>
      <p style={{fontWeight:'bold', color:'white'}}>Your library</p>
</div>
    <div>
      <img src={assets.arrow_icon}></img>
      <img src={assets.plus_icon}></img>
      </div>
    </div>

    <div style={{width:'300px',height:'100%',backgroundColor:'#121212b9',display:'flex',flexDirection:'column',gap:'50px',position:'relative',gap:'40px',top:'50px'}}>
    
    <div style={{position:'relative',left:'20px'}}>
      <h3 style={{fontWeight:'bold', color:'white'}}>Create Your first playlist</h3>
      <p style={{ color:'white'}}>its easy we will help you</p>
    </div>
    <div style={{display:'flex',gap:'10px',position:'relative',gap:'40px',top:'-30px',left:'40px'}}>
      <button>Create Playlist</button>
    </div>
   </div>
   <div style={{width:'300px',height:'700px',backgroundColor:'#121212b9',display:'flex',flexDirection:'column',gap:'50px',position:'relative',gap:'40px',top:'60px'}}>
    
    <div style={{position:'relative',left:'20px'}}>
      <h3 style={{fontWeight:'bold', color:'white'}}>Create Your first playlist</h3>
      <p style={{ color:'white'}}>its easy we will help you</p>
    </div>
    <div style={{display:'flex',gap:'10px',position:'relative',gap:'40px',top:'-30px',left:'40px'}}>
      <button>Create Playlist</button>
    </div>
   </div>
  
  
</>
)
}

export default Side;

 <div style={{display:'flex'}}>
      <img src={songsData[0].image} style={{ width: '90px', height: '100px' }}></img>
      <div style={{display:'flex',flexDirection:'column',position:'relative',left:'10px'}}>
      <h3 style={{color:'white'}}>{songsData[0].name}</h3>
        <p style={{color:'white'}}>{songsData[0].name.slice(0,12)}</p>
      </div>
    </div>
    <div> 
    
      <div>
        
        <img src={assets.shuffle_icon}alt="Image 1"/>
        <img src={assets.prev_icon} alt="Image 2" />
        <img src={assets.play_icon} alt="Image 3" />
        <img src={assets.shuffle_icon} alt="Image 4" />
        <img src={assets.loop_icon} alt="Image 5" />
      </div>
      </div>