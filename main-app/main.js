// Configuration for sub-applications
const appConfig = [
    {
        id: "grid",
        version: "1.0.0",
        url: "http://localhost:5173/dist/grid-app.es.js" // Updated URL for the ES module
    },
    {
        id: "list",
        version: "1.0.0",
        url: "http://localhost:5174/dist/list-app.es.js" // Updated URL for the ES module
    }
    
];

// Function to dynamically load a sub-application
function loadSubApp(config) {
    import(config.url)
    .then(module => {
        // module.default is the exported mount function if using ES modules
        module.mount(document.getElementById(config.id));
    })
    .catch(err => {
        console.error(`Error loading ${config.id}:`, err);
    });
}

// Load each sub-application
appConfig.forEach(loadSubApp);