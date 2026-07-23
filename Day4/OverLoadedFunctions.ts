// write signature -> implement a function -> call function

function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param:number|string):string
{
    if(typeof param === "string"){
        return `${param} is a string`;
    } else{
        return `${param} is a number`;
    }
}
console.log(getInfo("Ankit"));
console.log(getInfo(5));

// Different number of parameter 
function add(a:number, b:number): number;
function add(a:number,b:number,c:number):number;

function add(a:number,b:number,c?:number):number
{
    if(c!=undefined){
        return a+b+c;
    }
    return a+b;
}
console.log(add(5,3));
console.log(add(6,7,3));

// different return type
function processInput(input:string):string;
function processInput(input:number):number;

function processInput(input:string|number):string|number
{
    if(typeof input==="string"){
        return input.toUpperCase();
    } else{
        return ++input;
    }
}
console.log(processInput("Ankit"));
console.log(processInput(8));