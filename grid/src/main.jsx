import React from 'react';
import ReactDOM from 'react-dom/client';
import GridApp from './GridApp.jsx';

export function mount(el) {
    const root = ReactDOM.createRoot(el);
    root.render(
        <React.StrictMode>
            <GridApp />
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
