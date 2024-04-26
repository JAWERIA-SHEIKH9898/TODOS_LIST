import inquirer from "inquirer"

let todos = [];
let condition = "true";
while(condition){



let todoQustions= await inquirer.prompt([ 
       
    {
       name:"FirstQuation",
       type:"input",
       message:"What would you like to add in your Todos?",
    },
    {

        name:"SecondQustions",
        type:"Confirm",
        message:"Would you like to add more in your todos?",
        default:"true",

    },
    
]);


todos.push(todoQustions.FirstQuation);
condition = todoQustions.SecondQustions
console.log(todos)
}
