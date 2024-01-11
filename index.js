const fs = require('fs')
const inquirer = require('inquirer')


// write out questions for inquirer to use
const questions = [
    {
        type: "input",
        name: "title",
        message: 'What do you want to call your portfolio?'
    },
    {
        type: "input",
        name: "usersName",
        message: 'What is your name?'
    },
    {
        type: "input",
        name: "firstProject",
        message: 'What is your first project?'
    },
    {
        type: "input",
        name: "firstProjURL",
        message: 'What is your first project\'s URL?'
    },
    {
        type: "input",
        name: "secondProject",
        message: 'What is your second project?'
    },
    {
        type: "input",
        name: "secondProjURL",
        message: 'What is your second project\'s URL?'
    },
    {
        type: "editor",
        name: "bio",
        message: 'Describe yourself: '
    },
    {
        type: "input",
        name: "favoriteCharacter",
        message: 'Who is your favorite character from Star Wars? '
    },
    {
        type: "input",
        name: "favoriteCharacter",
        message: 'Who is your favorite character?'
    }
]
//inquire for use inputs
inquirer.prompt(questions)
.then(({title, usersName, firstProject, firstProjURL, secondProject, secondProjURL, bio}) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
        <header>
            <h2>${usersName}</h2>
        </header>
    
        <div id="proj1">
            <h2>${firstProject}</h2>
            <a href="${firstProjURL}"></a>
        </div>
        <div id="proj2">
            <h2>${secondProject}</h2>
            <a href="${secondProjURL}"></a>
        </div>
        <div id="bio">
            <h2>${bio}</h2>
        </div>
        
    </body>
    </html>`

    fs.writeFile('./index.html', html, (err) => {
        if(err){
            return console.log('Error');
        } else {
            console.log("HTML File Written Successfully");
        }
    })
})
// write the file 