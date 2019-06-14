const friends = require('../data/friends.js');

// API routes container, called by listener
let routes = app => {

    // Fetches all friends
    app.get('/api/friends', (req, res) => {
        return res.json(friends.list);
    });

    // Creates new friend from survey and returns a match
    app.post('/api/friends', (req, res) => {
        let survey = req.body;

        res.json(friends.match(survey));
    });
};

module.exports = {
    routes: routes
};