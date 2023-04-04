// importing in required sheets
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Triangle, Square } = require('./lib/shape');

inquirer
Shape
// creating questions for inquirer
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please input required text (maximum 3 characters)',
        validate: function(text) {
            if(text.length > 3){
                return "Enter no more than 3 characters you silly goose" 
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please select a text color'
    }, {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape from the following list',
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please select a shape color'
    },

]


// function to create SVG logo based off choice of shape
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            return new Promise((resolve, reject) => {
                if (response.shape === 'Circle') {
                    let svglogo = new Circle(response.text, response.textColor, response.shapeColor).renderSVG()
                    resolve(svglogo);
                } else if (response.shape === 'Triangle') {
                    let svglogo = new Triangle(response.text, response.textColor, response.shapeColor).renderSVG();
                    resolve(svglogo);
                } else {
                    let svglogo = new Square(response.text, response.textColor, response.shapeColor).renderSVG()
                    resolve(svglogo)
                }
            })
        })
        .then((svglogo) => fs.writeFile('./examples/logo.svg', svglogo, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg into examples folder'))
        )
}
// running function
init();
