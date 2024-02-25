// Configuration for sub-applications
const appConfig = [
    {
        id: "grid",
        version: "1.0.0",
        url: "http://localhost:5173/dist/grid-app.es.js" // Updated URL for the ES module
    },
    {
        id: "text",
        version: "1.0.0",
        url: "http://localhost:5175/dist/text-app.es.js" // Updated URL for the ES module
    },
    {
        id: "list",
        version: "1.0.0",
        url: "http://localhost:5174/dist/list-app.es.js" // Updated URL for the ES module
    },
   
    
];

/// Function to dynamically load a sub-application
function loadSubApp(config, data) {
    import(config.url)
    .then(module => {
        // Use the module.mount function and pass the data array
        module.mount(document.getElementById(config.id), data);
    })
    .catch(err => {
        console.error(`Error loading ${config.id}:`, err);
    });
}

// Array of values to pass to the ListApp
const listData = ["Item 1", "Item 2", "Item 3"];

// Load each sub-application
appConfig.forEach(config => {
    // Check if the sub-application is 'list' and pass the array of values
    if (config.id === "list") {
        loadSubApp(config, listData);
    } else {
        loadSubApp(config);
    }
});