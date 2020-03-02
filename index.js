// Variables
const fs = require("fs")
const inquirer = require("inquirer");
const axios = require("axios");
// const readme = require("readme-md-generator")


// Questions that need to be answered
inquirer
    .prompt({
        message: "What is your GithHub username?",
        username: "username"
    })
    .then(({ username })); {
    const queryUrl = `https://api.github.com/users/${username}`;
    console.log(queryUrl)
    axios
        .get(queryUrl)
        .then(function (res) {
            const stats = {
                "name": res.data.name,
                "email": res.data.email,
            }
        })
}
// function promptUser(){
//     return inquirer.prompt([
//         {
//             badges: "badges",
//             message: "How many badges do you have?",
//         },
//         {
//             project_title: "title",
//             message: "What is your project title?",
//         },
//         {
//             description: "description",
//             message: "What is the description?",
//         },
//         {
//             table: "table of contents",
//             message: "Table of contents?",
//         },
//         {
//             installation: "installation",
//             message: "Install",
//         },
//         {
//             usage: "usage",
//             message: "Usage",
//         },
//         {
//             liscense: "liscense",
//             message: "Liscense",
//         },
//         {
//             contributing: "contributing",
//             message: "Contributions?",
//         },
//         {
//             tests: "tests",
//             message: "Tests?",
//         },
//         {
//             github_profile_pic: "profile pic",
//             message: "GitHub Profile Picture",
//         },
//         {
//             github_email: "git hub email",
//             message: "GitHub email address?",
//         },
//     ])
// }

