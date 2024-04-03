#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos : string[] = [];

async function makeTodo(todos:string[]){
    do{
        let output = await inquirer.prompt({
            type:"list",
            name:"choose",
            message:"Select an Option.",
            choices:["Add Task", "Update Task", "View List", "Delete Task", "Exit"]
        })
        if (output.choose === "Add Task"){
            let addTodo = await inquirer.prompt({
                type:"input",
                name:"addtodo",
                message:"Add items in the list."
            });
            todos.push(addTodo.addtodo);
            console.log(chalk.yellow.bold("==>>Task added successfully!"));
           
        }
        if (output.choose === "Update Task"){
            let updateTodo = await inquirer.prompt({
                name:"updatetodo",
                type:"list",
                message:"Enter item for update.",
                choices:todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type:"input",
                name:"addtodo",
                message:"Add items in the list."
            });
            let newTodo = todos.filter(val => val !== updateTodo.updatetodo);
            todos =[...newTodo,addTodo.addtodo];
            console.log(chalk.yellow.bold("==>>Task updated successfully!"));
            
        }
        if (output.choose === "View List"){
            console.log(chalk.yellow.bold("\t","**** TO DO LIST ********"));
            todos.forEach(todo => console.log(chalk.green("\t\t",todo))); 
            console.log(chalk.yellow.bold("\t","*************************"));
        }
        if (output.choose === "Delete Task"){
            let deleteTodo = await inquirer.prompt({
                name:"deletetodo",
                type:"list",
                message:"Enter item for delete.",
                choices:todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.deletetodo);
            todos =[...newTodo];
            console.log(chalk.red.bold(`"==>>${deleteTodo.deletetodo}" is successfully deleted`));
            
        }
        if (output.choose === "Exit"){
            console.log(chalk.magenta.bold("**Thanks for using my todo.Goodbaye!**"));
            break;
        }
   
    } while(true); 
}
makeTodo(todos);