# Social Network API Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A back-end for a social media type app.  This app uses MongoDB, Express.js, and Node.js.

## Table of Contents


* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
 

## <a name="Installation"></a>Installation

This app requires [node.js](https://nodejs.org/en/download/prebuilt-installer). From the commandline,  run `npm i` from the root folder to install dependencies. Rename the .env.EXAMPLE to .env and replace MONGODB_URI with "your-MongDB-URI/social-network-db", for example: "mongodb://127.0.0.1:27017/social-network-db".

## <a name="Usage"></a>Usage

https://github.com/user-attachments/assets/484ec2ae-f8a3-4026-9098-8c11b238fc0b

Use `npm run dev` to build, generate seed data, and start the server. You can also do each of these actions individually by using `npm run build`, `npm run seed`, and `npm start`.

After starting the server, use an app like Insomnia to send http requests to localhost://3001.  Usable routes are as follows:

* /api/users
  - GET returns an array of all users
  - POST creates a new user
    + options to include in body:
    ```json
    {
      "username": "string, required",
      "email": "string, required",
      "thoughts": "ObjectId[], optional",
      "friends": "ObjectId[], optional"
    }
    ```

* /api/users/:id
  - GET returns a single user
  - PUT updates a single existing user
    + options to include in body:
    ```json
    {
      "username": "string, optional",
      "email": "string, optional",
      "thoughts": "ObjectId[], optional",
      "friends": "ObjectId[], optional"
    }
    ```
  - DELETE removes a single user from the database

* /api/users/:userId/friends/:friendId
  - POST adds a friend to the user's friends array
  - DELETE removes friend from user's friends array

* /api/thoughts
  - GET returns an array of all thoughts
  - POST creates a new thought
    + options to include in body:
    ```json
    {
      "thoughtText": "string, required",
      "username": "string, required",
      "reactions": "ObjectId[], optional"
    }
    ```

* /api/thoughts/:id
  - GET returns a single thought
  - PUT updates a single existing thought
    + options to include in body:
    ```json
    {
      "thoughtText": "string, required",
    }
    ```
  - DELETE removes a thought from the database

* /api/thoughts/:id/reactions
  - POST adds a reaction to the thought's reaction array
  - DELETE removes a reaction from the thought's reaction array


## <a name="license"></a>License

  [MIT](https://opensource.org/licenses/MIT)

## <a name="contributing"></a>Contributing

If you wish to contribute, please follow these [guidelines](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

## <a name="tests"></a>Tests

Use Insomnia or Postman to test routes.  

## <a name="questions"></a>Questions

If you have questions you can reach me at me@joshhensley.com. Add me on [Github](github.com/josh-hensley).
