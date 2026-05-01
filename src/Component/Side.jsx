import { assets } from "../assets/assets";
import React from "react";

function Side() {
  return (
    <div style={{
      width: "300px",
      height: "810px",
      backgroundColor: "#000",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}>

      {/* Top Section */}
      <div style={{
        backgroundColor: "#121212",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        <div style={{display:'flex', alignItems:'center', gap:'15px', cursor:'pointer'}}>
          <img src={assets.home_icon} style={{width:'22px'}} />
          <p style={{color:'white', fontWeight:'bold'}}>Home</p>
        </div>

        <div style={{display:'flex', alignItems:'center', gap:'15px', cursor:'pointer'}}>
          <img src={assets.search_icon} style={{width:'22px'}} />
          <p style={{color:'#b3b3b3', fontWeight:'bold'}}>Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div style={{
        backgroundColor: "#121212",
        borderRadius: "10px",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        height:'1000px'
      }}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <img src={assets.stack_icon} style={{width:'22px'}} />
            <p style={{color:'white', fontWeight:'bold'}}>Your Library</p>
          </div>

          <div style={{display:'flex', gap:'15px'}}>
            <img src={assets.plus_icon} style={{width:'18px', cursor:'pointer'}} />
            <img src={assets.arrow_icon} style={{width:'18px', cursor:'pointer'}} />
          </div>
        </div>

        {/* Playlist Card 1 */}
        <div style={{
          backgroundColor: "#242424",
          borderRadius: "10px",
          padding: "15px"
        }}>
          <h3 style={{color:'white'}}>Create your first playlist</h3>
          <p style={{color:'#b3b3b3', fontSize:'14px'}}>It's easy, we’ll help you</p>

          <button style={{
            marginTop:'10px',
            padding:'8px 15px',
            borderRadius:'20px',
            border:'none',
            fontWeight:'bold',
            cursor:'pointer',
            backgroundColor:'#01b729'
          }}>
            Create Playlist
          </button>
        </div>

        {/* Playlist Card 2 */}
        <div style={{
          backgroundColor: "#242424",
          borderRadius: "10px",
          padding: "15px"
        }}>
          <h3 style={{color:'white'}}>Let’s find some podcasts</h3>
          <p style={{color:'#b3b3b3', fontSize:'14px'}}>We’ll keep you updated</p>

          <button style={{
            marginTop:'10px',
            padding:'8px 15px',
            borderRadius:'20px',
            border:'none',
            fontWeight:'bold',
            cursor:'pointer',
            backgroundColor:'#01b729'
          }}>
            Browse Podcasts
          </button>
        </div>
      </div>

    </div>
  );
}

export default Side;