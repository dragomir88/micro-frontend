// Configuration for sub-applications
const appConfig = [
    // Update the `url` to point to the new path of the compiled JS file for "grid"
    { id: "grid", version: "1.0.0", url: "http://localhost:5173/dist/assets/main-CY4n-nmB.js" },
    
    // ... other sub-apps
];

// Function to dynamically load a sub-application
function loadSubApp(config) {
    const script = document.createElement('script');
    script.src = config.url;
    script.onload = () => {
        // Assuming sub-apps expose a global 'mount' function
        window[config.id].mount(document.getElementById(config.id)); 
    };
    document.body.appendChild(script);
}

// Load each sub-application
appConfig.forEach(loadSubApp);
