const path = require('path');
const express = require('express');
const html = require('./app/routing/htmlRoutes.js');
const api = require('./app/routing/apiRoutes.js');

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listener for routes
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);

    html.routes(path, app);
    api.routes(app);
});