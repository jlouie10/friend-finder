# Friend Finder

[![Dependency Status](https://david-dm.org/jlouie10/friend-finder.svg)](https://david-dm.org/jlouie10/friend-finder)

Friend Finder is a full-stack site will take in results users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

You can find the [application here](https://friend-finder-jl.herokuapp.com/).

Dependencies:

* [Express](https://expressjs.com/)

## Application

This application contains two HTML routes:

* [home](https://friend-finder-jl.herokuapp.com/), a landing page for the app
* [survey](https://friend-finder-jl.herokuapp.com/survey), a survey page for users to submit and return a match

and two API routes:

### **GET /api/friends**
Fetches all friends.

### **POST /api/friends**
Returns a match and creates a new friend from the user input.

Example request body:

```
{
    "name": "Justin Louie",
    "photo": "https://bit.ly/2ZuDTVH",
    "scores": [
        4,
        4,
        3,
        3,
        3,
        2,
        4,
        4,
        5,
        5
    ]
}
```

Example response:

```
{
    "name": "Ted Mosby",
    "totalDifference": 1,
    "photo": "https://bit.ly/2Kisftv"
}
```

The match is determined by the friend with the lowest `totalDifference` score, which compares your survey score with your friends.

## Instructions

Install the Node Express package with:

```
npm install
```

## Technologies Used

* Node.js
* JavaScript
* HTML5
* CSS
* Node packages
    * Express
* Heroku