// API routes container, called by listener
let routes = (path, app) => {
    // Fetches all friends
    app.get('/api/friends', (req, res) => {
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

        return res.json(friends);
    });
};

module.exports = {
    routes: routes
};