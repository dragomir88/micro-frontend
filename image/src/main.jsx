import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageApp from './ImageApp.jsx'
import './index.css'

// Modify the mount function to accept an array
export function mount(el) {
  const root = ReactDOM.createRoot(el);
  root.render(
      <React.StrictMode>
          <ImageApp />
      </React.StrictMode>
  );
}
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <ImageApp />
//   </React.StrictMode>,
// )