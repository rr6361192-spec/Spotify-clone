import React from 'react'
import {useNavigate} from 'react-router-dom'
import { assets } from './assets/assets'
function Navbar() {
 const navigate=useNavigate();
  return (
    <>
     <div style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
  position:'relative',
  top:'10px'
}}>

  {/* LEFT: Arrows */}
  <div style={{display: "flex", gap: "10px"}}>
    <div style={{
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }} onClick={()=>navigate(-1)}>
      <img src={assets.arrow_left} style={{width: "16px"}} />
    </div>

    <div style={{
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }}onClick={()=>navigate(+1)}>
      <img src={assets.arrow_right} style={{width: "16px"}} />
    </div>
  </div>

  {/* RIGHT: Buttons + Profile */}
  <div style={{display: "flex", alignItems: "center", gap: "15px",position:'relative',left:'-250px',}}>

    <button style={{
      padding: "6px 12px",
      borderRadius: "20px",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer"
    }}>
      Upgrade
    </button>

    <button style={{
      padding: "6px 12px",
      borderRadius: "20px",
      border: "none",
      backgroundColor: "#000",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer"
    }}>
      Install App
    </button>

    {/* Profile Circle */}
    <div style={{
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: "#860098",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer"
    }}>
      K
    </div>

  </div>
</div>
<div style={{display: "flex", alignItems: "center", gap: "15px",position:'relative',top:'10px'}}>

    <button style={{
      padding: "6px 12px",
      borderRadius: "20px",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer"
    }}>
      All
    </button>

    <button style={{
      padding: "10px 16px",
      borderRadius: "20px",
      border: "none",
      backgroundColor: "#000",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer"
    }}>
      Music
    </button>

    {/* Profile Circle */}
    <div style={{
      width: "90px",
      height: "30px",
      borderRadius: "20px",
      backgroundColor: "#010101",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer"
    }}>
     Podcast
    </div>

  </div>
    </>
  )
}

export default Navbar
