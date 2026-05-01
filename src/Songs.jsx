import React from 'react'
import Home from './Home'
import { useNavigate } from 'react-router-dom'

const Songs=({image,name,desc,id})=>
{
const navigate= useNavigate();
 
  return (
    <div style={{
  width: "210px",
  backgroundColor: "#181818",
  borderRadius: "10px",
  padding: "15px",
  cursor: "pointer",
  transition: "0.3s"
}} onClick={()=>navigate(`/album/${id}`)}>

  <img 
    src={image} 
    style={{
      width: "100%",
      borderRadius: "8px",
      marginBottom: "10px"
    }} 
  />

  <p style={{
    color: "white",
    fontWeight: "600",
    fontSize: "16px",
    margin: "5px 0"
  }}>
    {name}
  </p>

  

</div>
  )
}

export default Songs
