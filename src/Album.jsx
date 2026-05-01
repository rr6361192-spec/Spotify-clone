import React from 'react'
import Home from './Home'
function Album({image,name,desc}) {
  return (
    
      <div style={{
  width: "210px",
  backgroundColor: "#181818",
  borderRadius: "10px",
  padding: "15px",
  cursor: "pointer",
  transition: "0.3s",
  
}}>

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

export default Album;
