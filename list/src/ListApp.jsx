import React from "react";
import "./ListApp.css";

const ListApp = ({ data }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div style={containerStyle}>
        {data && data.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </>
  );
};

export default ListApp;
