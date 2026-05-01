import React from 'react'
import { assets, songsData } from '../assets/assets';
function Player() {
  return (
    <div style={{display:'flex',justifyContent:"flex-start",gap:'500px',position:'relative',top:'-50px'}}>
   <div style={{ display: 'flex', alignItems: 'center', gap: '10px',position:'relative',left:'90px' }}>
  <img 
    src={songsData[0].image} 
    alt={songsData[0].name}
    style={{ width: '110px', height: '80px', objectFit: 'cover', borderRadius: '4px',position:'relative',left:'0px' }}
  />
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <h3 style={{
      color: 'white',
      margin: 0,
      fontSize: '16px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '150px'
    }}>
      {songsData[0].name}
    </h3>
    <p style={{
      color: 'white',
      margin: 0,
      fontSize: '14px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '150px'
    }}>
      {songsData[0].desc.slice(0,10)} {/* You can also show artist here instead */}
    </p>
  </div>
  </div>
  <div >
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '45px', padding: '8px',position:'relative',left:'60px' }}>
  <img src={assets.shuffle_icon} alt="Shuffle" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
  <img src={assets.prev_icon} alt="Previous" style={{ width: '28px', height: '28px', cursor: 'pointer' }} />
  <img src={assets.play_icon} alt="Play" style={{ width: '36px', height: '36px', cursor: 'pointer' }} />
  <img src={assets.next_icon} alt="Next" style={{ width: '28px', height: '28px', cursor: 'pointer' }} />
  <img src={assets.loop_icon} alt="Loop" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
</div>
<div style={{ width: '150%', display: 'flex', alignItems: 'center', gap: '8px',position:'relative',top:'5px' }}>
    <span style={{ fontSize: '12px' ,color:'white'}}>1:00</span>
    <div style={{ flex: 4, height: '4px', backgroundColor: '#555', borderRadius: '2px', position: 'relative' }}>
      <div style={{ width: '40%', height: '4px', backgroundColor: '#1db954', borderRadius: '2px', position: 'absolute', top: 0, left: 0 }}></div>
    </div>
    <span style={{ fontSize: '12px',color:'white' }}>3:45</span>
  </div>
  

  </div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '8px',position:'relative',left:'60px' }}>
  <img src={assets.play_icon} alt="Shuffle" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
  <img src={assets.mic_icon} alt="Previous" style={{ width: '28px', height: '28px', cursor: 'pointer' }} />
  <img src={assets.speaker_icon} alt="Play" style={{ width: '36px', height: '36px', cursor: 'pointer' }} />
  <img src={assets.volume_icon} alt="Next" style={{ width: '28px', height: '28px', cursor: 'pointer' }} />
   <div style={{  height: '4px',width:'100px', backgroundColor: '#fff2f2', borderRadius: '2px' ,}}>
      <div style={{ width: '50px', height: '4px', backgroundColor: '#1db954', borderRadius: '2px',}}></div>
    </div>


    
    
    
  
  </div>
  </div>

  )
}

export default Player;
