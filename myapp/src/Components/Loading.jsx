import React from 'react'

const Loading = () => {
  return <div style={{ 
    width: "100%", 
    height: "100vh", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center", }}>
    <h1 style={{
        color: "#fff",
        fontSize: 60,
        fontFamily: 'sans-serif'
    }}>Loading...</h1>
  </div>
}

export default Loading