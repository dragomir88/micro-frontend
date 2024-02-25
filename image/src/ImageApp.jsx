import React from 'react';
import reactLogo from "./assets/react.svg";

function ImageApp() {

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black'
  };

  const logoStyle = {
    padding: '10vh 10vw',
    width: '25vw',
    height: '25vh'
  };

  return (
    <>
      <div style={containerStyle}>  
        <img src={reactLogo} style={logoStyle}/>  
      </div>
    </>
  );
}

export default ImageApp;
