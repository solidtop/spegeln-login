import express from 'express';


function initApp() {
    const app = express();

    app.use(express.static('public'));

    return app;
}

export default initApp;