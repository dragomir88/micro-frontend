import React from 'react';
import reactLogo from "./assets/react.svg"; // Assuming this is the path to your React logo

function ImageApp() {
  // Styles for the container to fill the screen and center its children
  const containerStyle = {
    width: "1000px",
    height: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const logoStyle = {
    width: "300px", // Set the width of the logo
    height: "300px", // Set the height of the logo
  };

  return (
    <>
      <div style={containerStyle}>
        <img src={reactLogo} style={logoStyle} alt="React Logo" />
      </div>
    </>
  );
}

export default ImageApp;
