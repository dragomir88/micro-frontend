// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import ListApp from './ListApp.jsx';

// Modify the mount function to accept an array
export function mount(el, data) {
    const root = ReactDOM.createRoot(el);
    root.render(
        <React.StrictMode>
            <ListApp data={data} />
        </React.StrictMode>
    );
}
