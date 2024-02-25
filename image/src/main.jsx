import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageApp from './ImageApp.jsx'
import './index.css'

export function mount(el) {
  const root = ReactDOM.createRoot(el);
  root.render(
      <React.StrictMode>
          <ImageApp />
      </React.StrictMode>
  );
}

//auto-initialize standalone mode
(function autoInitialize() {
  const standaloneMode = true;
  if (standaloneMode) {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      mount(rootElement);
    }
  }
})();