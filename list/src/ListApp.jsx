// ListApp.jsx
import React from 'react';
import './ListApp.css';

const ListApp = ({ data }) => {
  // Now ListApp can render the data passed as props
  return (
    <>
      {data && data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
};

export default ListApp;
