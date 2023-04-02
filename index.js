const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Circle, Triangle, Square} = require('./lib/shape');



inquirer
Shape
const questions = [
    {
        type:'input',
        name: 'text',
        message: 'Please input required text (maximum 3 characters)'
    },
    {
        type:'input',
        name: 'textColor',
        message: 'Please select a text color'
    },{
        type:'list',
        name:'shape',
        message:'Please choose a shape from the following list',
        choices:[
        "Circle",
        "Triangle",
        "Square",
    ]
    },
    {
        type:'input',
        name: 'shapeColor',
        message: 'Please select a shape color'
    },
    
]

// function init() {
//     inquirer.prompt(questions)
//       .then((response) => {
//         return new Promise((resolve, reject) => {
//           if (response.shape === 'circle') {
//             let svglogo = new Shape.circle(response.text, response.textColor, response.shapeColor).renderSVG();
//             resolve(svglogo);
//           } else if (response.shape === 'triangle') {
//             let svglogo = new Shape.triangle(response.text, response.textColor, response.shapeColor).renderSVG();
//             resolve(svglogo);
//           } else {
//             let svglogo = new Shape.square(response.text, response.textColor, response.shapeColor).renderSVG();
//             resolve(svglogo);
//           }
//         })
//       })
//       .then((svglogo) => fs.writeFile('./examples/logo.svg', svglogo, (err) =>
//         err ? console.log(err) : console.log('svg created')
//       ))
//   }
  
//   init();


function init() {
    inquirer.prompt(questions)
        .then((response)=> {
            return new Promise((resolve, reject) =>{
                if(response.shape === 'Circle'){
                    let svglogo =new Circle(response.text, response.textColor, response.shapeColor).renderSVG()
                    resolve(svglogo);
                } else if (response.shape === 'Triangle') {
                    let svglogo = new Triangle(response.text, response.textColor, response.shapeColor).renderSVG();
                    resolve(svglogo);
                } else{
                    let svglogo = new Square(response.text, response.textColor, response.shapeColor).renderSVG()
                    resolve(svglogo)
                }
            })
        })
    .then((svglogo) => fs.writeFile('./examples/logo.svg', svglogo, (err)=>
    err ? console.log(err) : console.log('Generated logo.svg into examples folder') )
)}


// function init() {
//     inquirer.prompt(questions).then(({text, textColor, shape, shapeColor})=>{
//         switch(shape) {
//             case "circle":
//                 const circle = new Circle(text, textColor, shapeColor)
//                 SVGLogo(circle.renderSVG());
//                 break;
//             case 'triangle':
//                 const triangle = new Triangle(text, textColor, shapeColor)
//                 SVGLogo(triangle.renderSVG());
//                 break;
//             case 'square':
//                 const square = new Square(text, textColor, shapeColor)
//                 SVGLogo(square.renderSVG())
//                 break;
//             default:
//                 break;
//         }
//     }
//     )
// }
// const SVGLogo = (Shape) => {
//     return fs.writeFile(path.join(__dirname, "/examples/","logo.svg"),Shape.renderSVG())
// }

init();
