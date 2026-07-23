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