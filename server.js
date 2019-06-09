const path = require('path');
const express = require('express');
const html = require('./app/routing/htmlRoutes.js')

const PORT = process.env.PORT || 8080;

let app = express();

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);

    html.routes(path, app);
});