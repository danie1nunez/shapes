const inquirer= require('inquirer');
const fs= require('fs');
const{Shape, Circle, Triangle, Square}= require('./lib/shapes');

function createShapes(){
    inquirer.prompt([{
        type: 'input',
        name:'text',
        message:'input desired text:'

    },{
        type: 'input',
        name:'textColor',
        message:'What color text would you like?:'
    },{
        type: 'list',
        name:'shape',
        message:'What shape do you want?:',
        choices:['Circle', 'Square', 'Triangle']
    },{
        type: 'input',
        name:'shapeColor',
        message:'What color will your shape be?:'
    }])
    .then(answers =>{
        let shape;
        if (answers.shape === 'Circle') {
            shape= new Circle()
        }else if(answers.shape === 'Triangle'){
            shape= new Triangle()
        }else{
            shape= new Square();
        };
        shape.settext(answers.text);
        shape.settextcolor(answers.textColor);
        shape.setshapeColor(answers.shapeColor);
        fs.writeFile(`./images/${answers.text}.svg`,shape.render(), (err)=>
        err? console.log(err) : console.log('Sucessfully created svg!')
        );
    })
};

createShapes();
