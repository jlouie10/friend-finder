// API routes container, called by listener
let routes = app => {
    let friends = [
        {
            name: 'Ted Mosby',
            photo: 'https://www.imdb.com/title/tt0460649/'
        },
        {
            name: 'Robin Scherbatsky',
            photo: 'https://www.imdb.com/title/tt0460649/'
        },
        {
            name: 'Barney Stinson',
            photo: 'https://www.imdb.com/title/tt0460649/'
        },
        {
            name: 'Lily Aldrin',
            photo: 'https://www.imdb.com/title/tt0460649/'
        },
        {
            name: 'Marshall Eriksen',
            photo: 'https://www.imdb.com/title/tt0460649/'
        }
    ];

    // Fetches all friends
    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });

    // Creates new friend from survey and returns a match
    app.post('/api/friends', (req, res) => {
        let survey = req.body;

        friends.push(survey);
        res.json(survey);
    });
};

module.exports = {
    routes: routes
};