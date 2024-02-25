// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import ListApp from './ListApp.jsx';

export function mount(el) {
    const root = ReactDOM.createRoot(el);
    root.render(
        <React.StrictMode>
            <ListApp />
        </React.StrictMode>
    );
}
