let friends = [
    {
        name: 'Ted Mosby',
        photo: 'https://bit.ly/2Kisftv',
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
        photo: 'https://bit.ly/2IhAFzb',
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
        photo: 'https://bit.ly/2ReHvYS',
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
        photo: 'https://bit.ly/2RnLLpf',
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
        photo: 'https://bit.ly/2IEvKHo',
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

// Creates friend in the friends array and returns a match in JSON
let addFriend = userObj => {
    let userScore;
    let match = {
        name: '',
        diff: 51,
        photo: ''
    };

    userObj.scores = userObj.scores.map(num => parseInt(num));
    userScore = calculateTotal(userObj.scores);

    // Friend matching algorithm
    // Compares the total score difference for each friend
    friends.forEach(element => {
        let diff = Math.abs(calculateTotal(element.scores) - userScore);

        if (diff < match.diff) {
            match.name = element.name;
            match.diff = diff;
            match.photo = element.photo;
        }
    });

    friends.push(userObj);

    return match;
};

// Calculates the total of all scores for a user or friend
let calculateTotal = arr => {
    let total = arr.reduce((total, num) => total + num);

    return total;
};

module.exports = {
    list: friends,
    add: addFriend
};