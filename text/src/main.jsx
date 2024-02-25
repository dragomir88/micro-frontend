import React from 'react'
import ReactDOM from 'react-dom/client'
import TextApp from './TextApp.jsx'
import './index.css'


export function mount(el) {
  const root = ReactDOM.createRoot(el);
  root.render(
      <React.StrictMode>
          <TextApp />
      </React.StrictMode>
  );
}

//auto-initialize in standalone mode
(function autoInitialize() {
  const standaloneMode = true;
  if (standaloneMode) {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      mount(rootElement);
    }
  }
})();