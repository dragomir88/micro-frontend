import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

function mount(el) {
    const root = ReactDOM.createRoot(el);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
//expose the mount 
window.grid = { mount };
// if we're in development mode app will mount not needing the main application
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('root');
    if (devRoot) {
        mount(devRoot);
    }
}
