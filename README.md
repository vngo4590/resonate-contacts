# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction
Hi! My name is Aaron, and this is my first project ever on ReactJs!
### About this program
This program is a search program, where you can search for who ever you like. It uses fure.js from (fusejs.io) to optimize the search performance.
In this program, you can only see the person's name, username, email address and phone number. This is because the other information are considered private and should not be displayed unless there is an authorization.
## Introduction
To run this program, you need to run:
    1. install NodeJs from [NodeJs Website](https://nodejs.org/en/?ref=creativetim)
    2. Open your terminal and then type `npm install` to download all the depndencies that I have used in this project.
    3. Once you have sucessfully installed the dependencies, you just need to run `npm start`
However, if you are unable to run the program because of the `module not found` problem, then you would need to do the following:
    1. Check if you have `.env` file in your root folder
    2. If you don't have it, then you need to create it and add the line `NODE_PATH=./src` onto the file
    3. Once the above is done, you need to go to the `package.json` file and change the line
        -  `"start": "react-scripts start",` to
        - `"start": "NODE_PATH=./src react-scripts start",`
Otherwise, please do email me at (aaron.vngo@gmail.com) for more information!

## The Program
In the program, you just need to go to contact page and then search for the contact you want!

