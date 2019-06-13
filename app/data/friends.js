let friends = [
    {
        name: 'Ted Mosby',
        photo: 'https://www.imdb.com/title/tt0460649/',
        scores: [
            4,
            3,
            2,
            2,
            5,
            4,
            5,
            1,
            5,
            5
        ]
    },
    {
        name: 'Robin Scherbatsky',
        photo: 'https://www.imdb.com/title/tt0460649/',
        scores: [
            2,
            4,
            1,
            3,
            2,
            4,
            3,
            3,
            3,
            3
        ]
    },
    {
        name: 'Barney Stinson',
        photo: 'https://www.imdb.com/title/tt0460649/',
        scores: [
            5,
            1,
            5,
            1,
            1,
            5,
            1,
            1,
            1,
            5
        ]
    },
    {
        name: 'Lily Aldrin',
        photo: 'https://www.imdb.com/title/tt0460649/',
        scores: [
            3,
            4,
            4,
            3,
            3,
            1,
            3,
            4,
            4,
            4
        ]
    },
    {
        name: 'Marshall Eriksen',
        photo: 'https://www.imdb.com/title/tt0460649/',
        scores: [
            4,
            2,
            3,
            2,
            5,
            2,
            5,
            1,
            2,
            5
        ]
    }
];

let addFriend = userObj => {
    userObj.scores = userObj.scores.map(num => parseInt(num));

    console.log(matchFriend(userObj));

    friends.push(userObj);
};

// Calculates the total of all scores for a user or friend
let calculateTotal = arr => {
    let total = arr.reduce((total, num) => total + num);

    return total;
};

// Friend matching algorithm
// Calculates the total score of the user and each friend, compares each score difference and declares the lowest as the match
let matchFriend = userObj => {
    let userScore = calculateTotal(userObj.scores);
    let match = {
        name: '',
        diff: 51,
        photo: ''
    };

    friends.forEach(element => {
        let diff = Math.abs(calculateTotal(element.scores) - userScore);

        if (diff < match.diff) {
            match.name = element.name;
            match.diff = diff;
            match.photo = element.photo;
        }
    });

    return match;
};

module.exports = {
    list: friends,
    add: addFriend
};