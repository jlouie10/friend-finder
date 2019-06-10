// HTML routes container, called by listener
let routes = (path, app) => {
    // Route that diplays the homepage to the user
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Route that displays the survey to the user
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}

module.exports = {
    routes: routes
};