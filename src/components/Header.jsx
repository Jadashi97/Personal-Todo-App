import React from 'react';

const Header = () => {
  const myStyles = {
    color: "black", 
    fontSize: '50px',
    margin: "auto -16px",
    padding: "16px 32px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#eee"
  }
  return (
    <div style={myStyles} >
      Personal Todo app
    </div>
  )
}

export default Header;
