 const appConfig = [
    {
        id: "grid",
        version: "0.0.1",
        url: `http://localhost:5173/dist/grid-app-0.0.1.es.js`  
    },
    {
        id: "text",
        version: "1.0.0",
        url: "http://localhost:5175/dist/text-app-0.0.1.es.js"  
    },
    {
        id: "image",
        version: "1.0.0",
        url: "http://localhost:5176/dist/image-app-0.0.1.es.js"  
    },
    {
        id: "list",
        version: "1.0.0",
        url: "http://localhost:5174/dist/list-app-0.0.1.es.js"  
    },
    
];

function loadSubApp(config, data) {
    import(config.url)
    .then(module => {
        module.mount(document.getElementById(config.id), data);
    })
    .catch(err => {
        console.error(`Error loading ${config.id}:`, err);
    });
}

const listData = ["Item 1", "Item 2", "Item 3","Item 4", "Item 5", "Item 6","Item 7", "Item 8", "Item 9"];
 
appConfig.forEach(config => {
    if (config.id === "list") {
        loadSubApp(config, listData);
    } else {
        loadSubApp(config);
    }
});