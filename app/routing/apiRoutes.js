const friends = require('../data/friends.js');

// API routes container, called by listener
let routes = app => {

    // Calculates the total of all scores for a user or friend
    let calculateTotal = arr => {
        let total = arr.reduce((total, num) => total + num);

        return total;
    };

    // Sorts the array of match scores
    let compare = (a, b) => {
        let comparison = 0;

        if (a.score > b.score) {
            comparison = 1;
        } else if (a.score < b.score) {
            comparison = -1;
        }
        return comparison;
    };

    // Friend matching algorithm
    let matchFriends = userObj => {
        let matchArr = []; // Array of match scores, where the lowest score is the most compatible
        let userScore = calculateTotal(userObj.scores);

        friends.list.forEach(element => {
            let matchObj = {};

            matchObj['name'] = element.name;
            matchObj['score'] = Math.abs(calculateTotal(element.scores) - userScore);

            matchArr.push(matchObj);
        });

        return matchArr.sort(compare)[0].name;
    };

    // Fetches all friends
    app.get('/api/friends', (req, res) => {
        return res.json(friends.list);
    });

    // Creates new friend from survey and returns a match
    app.post('/api/friends', (req, res) => {
        let survey = req.body;

        survey.scores = survey.scores.map(num => parseInt(num));

        console.log(matchFriends(survey));
        friends.list.push(survey);
        res.json(survey);
    });
};

module.exports = {
    routes: routes
};